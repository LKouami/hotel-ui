<template>
  <div>
    <form ref="form" @submit="checkForm">
      <b-form-group
        label="Nom"
        label-for="name-input"
        invalid-feedback="le nom est requis"
      >
        <b-form-input id="name-input" v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Email"
        label-for="email-input"
        invalid-feedback="l'email est requis"
      >
        <b-form-input id="email-input" v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Mot de passe"
        label-for="password-input"
        invalid-feedback="le mot de passe est requis"
      >
        <b-form-input id="password-input" v-model="password"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Role"
        label-for="role-input"
        invalid-feedback="le role est requis"
      >
        <b-form-select v-model="role" :options="options"></b-form-select>
      </b-form-group>
      <b-form-group
        label="Date de création"
        label-for="date-input"
        invalid-feedback="la date de création est requise"
      >
        <VueCtkDateTimePicker
          id="date-input"
          v-model="createdAt"
          :dark="false"
          :label="label"
          :no-label="true"
          locale="fr"
        />
      </b-form-group>
      <div class="modal-footer">
        <b-button @click="closeModal" variant="outline-danger"
          >Annuler</b-button
        >
        <b-button variant="outline-success" type="submit">Valider</b-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import { CommonFunctions } from "@/common/core/commonFunctions";
import { User } from "@/models/butler/User";
import { Role } from "@/models/butler/Role";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
export default Vue.extend({
  name: "Modal",
  props: {
    action: { type: String, default: null },
  },
  data() {
    return {
      createdAt: new Date(),
      name: "",
      email: "",
      role: "",
      password: "",
      options: [undefined],
      label: "Selectionnez une date et heure",
    };
  },
  created(){
    this.options = this.setRoleArray()
  },
  computed: {
    ...mapGetters("role", ["getRolesMap"]),
  },
  methods: {
    ...mapActions("user", ["sendUser"]),
    ...mapActions("butler", ["setIsModalVisible"]),

    setRoleArray() :  any[] {
      const options : any[] = []
      for (const [key, value] of this.getRolesMap) {
        const role = {
          value : key,
          text : value
        }
        options.push(role)
      }
      return options
    },

    checkForm: function (e) {
      e.preventDefault();
      if (
        this.name === "" ||
        this.email === "" ||
        this.password === "" ||
        this.email === "" ||
        this.role === ""
      ) {
        CommonFunctions.makeToast(
          "danger",
          "Veuillez remplir tous les champs",
          "Statut du message",
          this.$bvToast
        );
      } else {
        const user: User = new User();
        user.name = this.name;
        user.email = this.email;
        user.password = this.password;
        user.role_id = this.role;
        user.createdAt = new Date(this.createdAt).toISOString();
        user.modifiedAt = new Date(this.createdAt).toISOString();
        this.sendUser(user).then(() => {
          console.log("envoyé depuis le modal");
        });
      }
    },
    closeModal() {
      this.setIsModalVisible(false);
    },
  },
});
</script>
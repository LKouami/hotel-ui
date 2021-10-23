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
        label="Nationalité"
        label-for="nationality-input"
        invalid-feedback="la nationalité est requise"
      >
        <b-form-input id="nationality-input" v-model="nationality"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Numéro d'identité"
        label-for="id_card_num-input"
        invalid-feedback="le numéro de la carte d'identité est requis"
      >
        <b-form-input id="id_card_num-input" v-model="id_card_num"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Téléphone"
        label-for="phone-input"
        invalid-feedback="le numéro de téléphone est requis"
      >
        <b-form-input id="phone-input" v-model="phone"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Date de naissance"
        label-for="birth_date-input"
        invalid-feedback="le numéro de téléphone est requis"
      >
        <VueCtkDateTimePicker id="birth_date-input" v-model="birth_date"/>
      </b-form-group>
      <b-form-group
        label="Sous-couvert"
        label-for="under_cover-input"
        invalid-feedback="le sous couvert est requis"
      >
        <b-form-input id="under_cover-input" v-model="under_cover"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Commentaires"
        label-for="comments-input"
        invalid-feedback="le commentaire est requis"
      >
        <b-form-input id="comments-input" v-model="comments"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Type de client"
        label-for="client_type-input"
        invalid-feedback="le type de client est requis"
      >
        <b-form-select v-model="client_type_id" :options="options"></b-form-select>
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
import { Client } from "@/models/butler/Client";
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
      nationality: "",
      id_card_num: "",
      phone: "",
      birth_date: new Date,
      under_cover: "",
      comments: "",
      client_type_id: "",
      options: [undefined],
      label: "Selectionnez une date et heure",
    };
  },
  created(){
    this.options = this.setClientTypeArray()
  },
  computed: {
    ...mapGetters("client_type", ["getClientTypesMap"]),
  },
  methods: {
    ...mapActions("client", ["sendClient"]),
    ...mapActions("butler", ["setIsModalVisible"]),

    setClientTypeArray() :  any[] {
      const options : any[] = []
      for (const [key, value] of this.getClientTypesMap) {
        const client_type = {
          value : key,
          text : value
        }
        options.push(client_type)
      }
      return options
    },

    checkForm: function (e) {
      e.preventDefault();
      if (
        this.name === "" ||
        this.email === "" ||
        this.nationality === "" ||
        this.id_card_num === "" ||
        this.under_cover === "" ||
        this.comments === "" ||
        this.client_type_id === "" ||
        this.phone === ""
      ) {
        CommonFunctions.makeToast(
          "danger",
          "Veuillez remplir tous les champs",
          "Statut du message",
          this.$bvToast
        );
      } else {
        const client: Client = new Client();
        client.name = this.name;
        client.email = this.email;
        client.nationality = this.nationality;
        client.id_card_num = this.id_card_num;
        client.birth_date = new Date(this.birth_date).toISOString();
        client.under_cover = this.under_cover;
        client.comments = this.comments;
        client.client_type_id = this.client_type_id;
        client.phone = this.phone;
        client.createdAt = new Date(this.createdAt).toISOString();
        client.modifiedAt = new Date(this.createdAt).toISOString();
        this.sendClient(client).then(() => {
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
<template>
  <div>
    <form ref="form" @submit="checkForm">
      <b-form-group
        label="Nom"
        label-for="name-input"
        invalid-feedback="le nom est requis"
      >
        <b-form-input
          id="name-input"
          v-model="name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Utilisateur"
        label-for="user-input"
        invalid-feedback="l'utilisateur est requis"
      >
        <b-form-input
          id="user-input"
          v-model="user_id"
        ></b-form-input>
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
            <b-button @click="closeModal" variant="outline-danger">Annuler</b-button>
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
import {CommonFunctions} from "@/common/core/commonFunctions"
import { ClientType } from "@/models/butler/ClientType";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
export default Vue.extend({
  name: "Modal",
  props: {
    action: { type: String, default: null },
  },
  data() {
    return {
      createdAt: new Date,
      name:'',
      user_id:'',
      label: "Selectionnez une date et heure",
    };
  },
  methods: {
    ...mapActions("client_type", ["sendClientType"]),
    ...mapActions("butler", ["setIsModalVisible"]),
    checkForm: function (e) {
      e.preventDefault();
      if((this.name==='' )) {
          CommonFunctions.makeToast(
          "danger",
          "Veuillez remplir tous les champs",
          "Statut du message",
          this.$bvToast
        );
      } else {
          const client_type: ClientType = new ClientType();
          client_type.name = this.name;
          client_type.user_id = this.user_id;
          client_type.createdAt = new Date(this.createdAt).toISOString()
          client_type.modifiedAt = new Date(this.createdAt).toISOString()
          this.sendClientType(client_type).then(()=> {
              console.log('envoyé depuis le modal')
          })
      }
    },
    closeModal(){
        this.setIsModalVisible(false)
    }
  },
});
</script>
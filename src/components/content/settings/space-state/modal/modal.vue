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
import { SpaceState } from "@/models/butler/SpaceState";
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
      label: "Selectionnez une date et heure",
    };
  },
  methods: {
    ...mapActions("space_state", ["sendSpaceState"]),
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
          const space_state: SpaceState = new SpaceState();
          space_state.name = this.name;
          space_state.createdAt = new Date(this.createdAt).toISOString()
          space_state.modifiedAt = new Date(this.createdAt).toISOString()
          this.sendSpaceState(space_state).then(()=> {
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
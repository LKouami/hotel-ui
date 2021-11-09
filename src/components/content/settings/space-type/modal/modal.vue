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
import { SpaceType } from "@/models/butler/SpaceType";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
export default Vue.extend({
  name: "Modal",
  props: {
    action: { type: String, default: null },
    data: { type: SpaceType, default: new SpaceType },
  },
  data() {
    return {
      id:'',
      createdAt: '',
      name:'',
      label: "Selectionnez une date et heure",
    };
  },
  created(){
    this.setFields(this.action, this.data)
  },
  methods: {
    ...mapActions("space_type", ["sendSpaceType", "updateSpaceType"]),
    ...mapActions("butler", ["setIsModalVisible"]),
    setFields(currentAction: string, data: SpaceType){
      if(currentAction === 'update') {
        this.createdAt = data.createdAt
        this.name = data.name
        this.id = data.id
      }
    },
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
          const space_type: SpaceType = new SpaceType();
          space_type.id = this.id;
          space_type.name = this.name;
          space_type.createdAt = new Date(this.createdAt).toISOString()
          space_type.modifiedAt = new Date(this.createdAt).toISOString()
          if(this.action ==='create'){
          this.sendSpaceType(space_type).then(()=> {
              console.log('envoyé depuis le modal')
          })
          }else if (this.action === 'update'){
          this.updateSpaceType(space_type).then(() => {
          console.log("updaté depuis le modal");
        });
        }
      }
    },
    closeModal(){
        this.setIsModalVisible(false)
    }
  },
});
</script>
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
        label="Localisation"
        label-for="location-input"
        invalid-feedback="la localisation est requise"
      >
        <b-form-input
          id="location-input"
          v-model="location"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Prix"
        label-for="price-input"
        invalid-feedback="le prix est requis"
      >
        <b-form-input
          id="price-input"
          v-model="price"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Commentaire"
        label-for="comments-input"
        invalid-feedback="le commentaire est requis"
      >
        <b-form-input
          id="comments-input"
          v-model="comments"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Type d'espace"
        label-for="space_type-input"
        invalid-feedback="le type d'espace est requis"
      >
        <b-form-select v-model="space_type_id" :options="space_type_options"></b-form-select>
      </b-form-group>

      <b-form-group
        label="Etat d'espace"
        label-for="space_state-input"
        invalid-feedback="l'état d'espace est requis"
      >
        <b-form-select v-model="space_state_id" :options="space_state_options"></b-form-select>
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
import { Space } from "@/models/butler/Space";
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
      location:'',
      price:'',
      comments:'',
      space_type_id:'',
      space_state_id:'',
      label: "Selectionnez une date et heure",
      space_type_options: [undefined],
      space_state_options: [undefined],
    };
  },
  created(){
    this.space_type_options = this.setSpaceTypeArray()
    this.space_state_options = this.setSpaceStateArray()
  },
  computed: {
    ...mapGetters("space_type", ["getSpaceTypesMap"]),
    ...mapGetters("space_state", ["getSpaceStatesMap"]),
  },
  methods: {
    ...mapActions("space", ["sendSpace"]),
    ...mapActions("butler", ["setIsModalVisible"]),

    setSpaceTypeArray() :  any[] {
      const options : any[] = []
      for (const [key, value] of this.getSpaceTypesMap) {
        const space_type = {
          value : key,
          text : value
        }
        options.push(space_type)
      }
      return options
    },

    setSpaceStateArray() :  any[] {
      const options : any[] = []
      for (const [key, value] of this.getSpaceStatesMap) {
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
      if((this.name==='' )) {
          CommonFunctions.makeToast(
          "danger",
          "Veuillez remplir tous les champs",
          "Statut du message",
          this.$bvToast
        );
      } else {
          const space: Space = new Space();
          space.name = this.name;
          space.location = this.location;
          space.price = this.price;
          space.comments = this.comments;
          space.space_type_id = this.space_type_id;
          space.space_state_id = this.space_state_id;
          space.createdAt = new Date(this.createdAt).toISOString()
          space.modifiedAt = new Date(this.createdAt).toISOString()
          this.sendSpace(space).then(()=> {
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
<template>
  <div>
    <form ref="form" @submit="checkForm">
      <b-form-group
        label="Date de la facture"
        label-for="date-input"
        invalid-feedback="la date de la facture est requise"
      >
        <VueCtkDateTimePicker
          id="date-input"
          v-model="b_date"
          :dark="false"
          :label="label"
          :no-label="true"
          locale="fr"
        />
      </b-form-group>
      <b-form-group
        label="Numéro"
        label-for="b_num-input"
        invalid-feedback="le Numéro de facture est requis"
      >
        <b-form-input
          id="b_num-input"
          v-model="b_num"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Client"
        label-for="client-input"
        invalid-feedback="le client est requis"
      >
        <b-form-select v-model="client_id" :options="options"></b-form-select>
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
import { Bill } from "@/models/butler/Bill";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
export default Vue.extend({
  name: "Modal",
  props: {
    action: { type: String, default: null },
  },
  data() {
    return {
      createdAt: new Date,
      b_date: new Date,
      b_num:'',
      client_id:'',
      options: [undefined],
      label: "Selectionnez une date et heure",
    };
  },
  created(){
    this.options = this.setClientArray()
  },
  computed: {
    ...mapGetters("client", ["getClientsMap"]),
  },
  methods: {
    ...mapActions("bill", ["sendBill"]),
    ...mapActions("butler", ["setIsModalVisible"]),
    setClientArray() :  any[] {
      const options : any[] = []
      for (const [key, value] of this.getClientsMap) {
        const client = {
          value : key,
          text : value
        }
        options.push(client)
      }
      return options
    },
    checkForm: function (e) {
      e.preventDefault();
      if((this.b_num==='' )) {
          CommonFunctions.makeToast(
          "danger",
          "Veuillez remplir tous les champs",
          "Statut du message",
          this.$bvToast
        );
      } else {
          const bill: Bill = new Bill();
          bill.b_date = new Date(this.b_date).toISOString();
          bill.b_num = this.b_num;
          bill.client_id = this.client_id;
          bill.createdAt = new Date(this.createdAt).toISOString()
          bill.modifiedAt = new Date(this.createdAt).toISOString()
          this.sendBill(bill).then(()=> {
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
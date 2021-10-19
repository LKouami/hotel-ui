<template>
  <div>
    <b-table :items="dataToDisplay" :fields="fields" :tbody-tr-class="rowClass">
      
      <template #cell(createdAt)="data">
          <div>
          {{ data.item._createdAt | formatDate  }}
          </div>
        </template>
        <template #cell(begin_date)="data">
          <div>
          {{ data.item.begin_date | formatDate  }}
          </div>
        </template>
        <template #cell(end_date)="data">
          <div>
          {{ data.item.end_date | formatDate  }}
          </div>
        </template>
      <template #cell(actions)="">
        <b-button
          size="sm"
          class="mr-1"
          @click="showModal()"
          ref="btnShow"
        >
          Voir Plus
        </b-button>
        <b-button
          size="sm"
          class="mr-1"
        >
          Mettre fin 
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
    >
    <modal/>
    </b-modal>
  </div>
</template>

<script lang="ts">
import mock from "./mock";
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { Utils } from "@/common/core/utils";
import { Reservation } from "@/models/butler/Reservation";
import Modal from "./modal/modal.vue"

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});

export default Vue.extend({
  name: "Reservations",
  components: {
    Modal
  },
  data() {
    return {
      fields: [
        {
          key:"begin_date",
          label:"Date début",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"end_date",
          label:"Date fin",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"comments",
          label:"Commentaires",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"reservation_state",
          label:"Etat",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"client.name",
          label:"Client",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"space.name",
          label:"Espace",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"reduction.name",
          label:"Reduction",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"createdAt",
          label:"Date de création",
          thClass: "tableTh",
          sortable: false,  
        }, 
        {
          key:"actions",
          label:"Actions",
          thClass: "tableTh",
          sortable: false,
        }
        ],
      items: mock.items,
      modalContent : [
        {
          label: "Date début",
          type: "date"

        }
      ]
    };
  },

  methods: {
    ...mapActions("reservation", [
      "retrieveReservations",
    ]),
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },

    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-prevent-closing', '#btnShow')
      console.log('teststtststst')
    },
  },

  computed: {
    ...mapGetters("reservation", [
      'getReservations'
    ]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): Reservation[] {
      return Utils.sortByDate(this.getReservations)
    },
  },
  created(){
    this.retrieveReservations()
  }
});
</script>
<style src="./reservations.scss" lang="scss" scoped/>

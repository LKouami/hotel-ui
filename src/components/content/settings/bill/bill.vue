<template>
  <div>
     <br>
    <div class="row">
        <h2>Facture</h2>
        <b-button
          size="xs"
          class="mr-1 ml-2 mb-1 mt-1"
          variant="outline-success"
        >
          Nouveau
        </b-button>
    </div>
    <div class="row">
      <b-table 
      :items="dataToDisplay" 
      :fields="fields" 
      :tbody-tr-class="rowClass"
      >
      <template #cell(createdAt)="data">
          <div>
          {{ data.item._createdAt | formatDate  }}
          </div>
        </template>
      <template #cell(actions)="">
        <b-button
          size="sm"
          class="mr-1"
          variant="outline-primary"
        >
          Modifier
        </b-button>
        <b-button
          size="sm"
          class="mr-1"
          variant="outline-danger"
        >
          Supprimer 
        </b-button>
      </template>
    </b-table></div>
    
  </div>
</template>

<script lang="ts">
import mock from "../../reservations/mock";
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Bill } from "@/models/butler/Bill";
import { Utils } from "@/common/core/utils";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});
export default Vue.extend({
  name: "Bill",
  data() {
    return {
      fields: [
        {
          key:"b_date",
          label:"Date de la facture",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"b_num",
          label:"Numero",
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
    };
  },

  methods: {
    ...mapActions("bill", [
      "retrieveBills",
    ]),
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },
  },

  computed: {
    ...mapGetters("bill", [
      'getBills'
    ]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): Bill[] {
      return Utils.sortByDate(this.getBills)
    },
  },
});
</script>
<style src="./bill.scss" lang="scss" scoped/>

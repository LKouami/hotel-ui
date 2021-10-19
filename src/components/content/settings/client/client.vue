<template>
  <div>
     <br>
    <div class="row">
        <h2>Client</h2>
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
        <template #cell(birth_date)="data">
          <div>
          {{ data.item.birth_date | formatDate  }}
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
import { Client } from "@/models/butler/Client";
import { Utils } from "@/common/core/utils";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});
export default Vue.extend({
  name: "Client",
  data() {
    return {
      fields: [
        {
          key:"name",
          label:"Nom",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"email",
          label:"Email",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"nationality",
          label:"Nationalité",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"id_card_num",
          label:"Num Identité",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"phone",
          label:"Téléphone",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"birth_date",
          label:"Date de naissance",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key:"under_cover",
          label:"Sous-Couvert",
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
          key:"client_type.name",
          label:"Type de client",
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
    ...mapActions("client", [
      "retrieveClients",
    ]),
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },
  },

  computed: {
    ...mapGetters("client", [
      'getClients'
    ]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): Client[] {
      return Utils.sortByDate(this.getClients)
    },
  },
  created(){
    console.log(this.getClients)
  }
});
</script>
<style src="./client.scss" lang="scss" scoped/>

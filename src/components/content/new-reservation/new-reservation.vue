<template>
  <div>
    <b-table :items="dataToDisplay" :fields="fields" :tbody-tr-class="rowClass">
      <template #cell(actions)="">
        <b-button size="sm" class="mr-1"> Nouvelle réservation </b-button>
      </template>

      <template #cell(createdAt)="data">
        <div>
          {{ data.item.createdAt | formatDate }}
        </div>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Space } from "@/models/butler/Space";
import { Utils } from "@/common/core/utils";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});

export default Vue.extend({
  name: "NewReservation",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Nom",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "location",
          label: "Localisation",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "price",
          label: "Prix",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "comments",
          label: "Commentaires",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "space_type.name",
          label: "Type d'espace",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "space_state.name",
          label: "Etat d'espace",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "createdAt",
          label: "Date de création",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "actions",
          label: "Actions",
          thClass: "tableTh",
          sortable: false,
        },
      ],
    };
  },

  methods: {
    ...mapActions("space", ["retrieveSpaces"]),
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.space_state.name === "libre") return "table-success";
    },
  },

  computed: {
    ...mapGetters("space", ["getSpaces"]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): Space[] {
      return Utils.sortByDate(this.getSpaces);
    },
  },
});
</script>
<style src="./new-reservation.scss" lang="scss" scoped/>

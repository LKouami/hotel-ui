<template>
  <div>
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
      <template #cell(actions)="">
        <b-button
          size="sm"
          class="mr-1"
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
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "Reservations",
  data() {
    return {
      fields: ["nom", "type", "localisation", "prix","disponibilite", "actions"],
      items: [
        {
          nom: "Elysée",
          type: "chambre",
          localisation: "2eme étage",
          prix: 20000,
          disponibilite: "libre",
        },
        {
          nom: "Elysée",
          type: "chambre",
          localisation: "2eme étage",
          prix: 20000,
          disponibilite: "occupé",
        },
        {
          nom: "Elysée",
          type: "chambre",
          localisation: "2eme étage",
          prix: 20000,
          disponibilite: "libre",
        },
        {
          nom: "Elysée",
          type: "chambre",
          localisation: "2eme étage",
          prix: 20000,
          disponibilite: "occupé",
        },
        {
          nom: "Elysée",
          type: "chambre",
          localisation: "2eme étage",
          prix: 20000,
          disponibilite: "libre",
        },
      ],
    };
  },

  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },
  },

  computed: {},
});
</script>
<style src="./reservations.scss" lang="scss" scoped/>

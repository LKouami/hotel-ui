<template>
  <div>
     <br>
    <div class="row">
        <h2>Affectation de matériel</h2>
    </div>
    <div class="row"><b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
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
    </b-table></div>
    
  </div>
</template>

<script lang="ts">
import mock from "../../reservations/mock";
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "AffectationMateriel",
  data() {
    return {
      fields: ["nom", "type", "localisation", "prix","disponibilite", "actions"],
      items: mock.items
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
<style src="./affectation-materiel.scss" lang="scss" scoped/>

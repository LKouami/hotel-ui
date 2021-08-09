<template>
  <div class="fill-container">
      <home v-if="this.getCurrentSidebarElement === c.homeBaseName"/>
      <client v-if="this.getCurrentSidebarElement === c.clientBaseName"/>
      <espace v-if="this.getCurrentSidebarElement === c.espaceBaseName"/>
      <etat-espace v-if="this.getCurrentSidebarElement === c.etatEspaceBaseName"/>
      <materiel v-if="this.getCurrentSidebarElement === c.materielBaseName"/>
      <type-client v-if="this.getCurrentSidebarElement === c.typeClientBaseName"/>
      <type-espace v-if="this.getCurrentSidebarElement === c.typeEspaceBaseName"/>
      <affectation-materiel v-if="this.getCurrentSidebarElement === c.affectationMaterielBaseName"/>
    </div>
</template>

<script lang="ts" >
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import Home from '@/components/content/home/home.vue'
import Client from '@/components/content/settings/client/client.vue'
import Espace from '@/components/content/settings/espace/espace.vue'
import EtatEspace from '@/components/content/settings/etat-espace/etat-espace.vue'
import Materiel from '@/components/content/settings/materiel/materiel.vue'
import TypeClient from '@/components/content/settings/type-client/type-client.vue'
import TypeEspace from '@/components/content/settings/type-espace/type-espace.vue'
import AffectationMateriel from '@/components/content/settings/affectation-materiel/affectation-materiel.vue'
import commonVars from "@/common/core/commonVars";

export default Vue.extend({
  name: "Butler",

  components: {
    Home,
    Client,
    Espace,
    EtatEspace,
    Materiel,
    TypeClient,
    TypeEspace,
    AffectationMateriel
  },

  data() {
    return {
      c : commonVars
    };
  },

  computed: {
    ...mapGetters('sidebar',['getCurrentSidebarElement']),
  },

  methods: {
    ...mapActions("butler", [
      "retrieveAffectationMateriel",
    ]),
  },
  created(){
    this.retrieveAffectationMateriel()
  }
});
</script>

<style src="./butler.scss" lang="scss" scoped/>

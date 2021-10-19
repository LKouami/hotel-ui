<template>
  <div class="fill-container">
      <home v-if="this.getCurrentSidebarElement === c.homeBaseName"/>
      <client v-if="this.getCurrentSidebarElement === c.clientBaseName"/>
      <space-state v-if="this.getCurrentSidebarElement === c.spaceStateBaseName"/>
      <user v-if="this.getCurrentSidebarElement === c.userBaseName"/>
      <space v-if="this.getCurrentSidebarElement === c.spaceBaseName"/>
      <client-type v-if="this.getCurrentSidebarElement === c.clientTypeBaseName"/>
      <space-type v-if="this.getCurrentSidebarElement === c.spaceTypeBaseName"/>
      <role v-if="this.getCurrentSidebarElement === c.roleBaseName"/>
      <reduction v-if="this.getCurrentSidebarElement === c.reductionBaseName"/>
      <bill v-if="this.getCurrentSidebarElement === c.billBaseName"/>
    </div>
</template>

<script lang="ts" >
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import Home from '@/components/content/home/home.vue'
import Client from '@/components/content/settings/client/client.vue'
import SpaceState from '@/components/content/settings/space-state/space-state.vue'
import User from '@/components/content/settings/user/user.vue'
import ClientType from '@/components/content/settings/client-type/client-type.vue'
import SpaceType from '@/components/content/settings/space-type/space-type.vue'
import Role from '@/components/content/settings/role/role.vue'
import Space from '@/components/content/settings/space/space.vue'
import Reduction from '@/components/content/settings/reduction/reduction.vue'
import Bill from '@/components/content/settings/bill/bill.vue'
import commonVars from "@/common/core/commonVars";

export default Vue.extend({
  name: "Butler",

  components: {
    Home,
    Client,
    SpaceState,
    User,
    ClientType,
    Role,
    Space,
    Reduction,
    SpaceType,
    Bill
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
    ...mapActions("role", [
      "retrieveRoles",
    ]),
    ...mapActions("user", [
      "retrieveUsers",
    ]),
    ...mapActions("client_type", [
      "retrieveClientTypes",
    ]),
    ...mapActions("space_type", [
      "retrieveSpaceTypes",
    ]),
    ...mapActions("space_state", [
      "retrieveSpaceStates",
    ]),
    ...mapActions("space", [
      "retrieveSpaces",
    ]),
    ...mapActions("client", [
      "retrieveClients",
    ]),
    ...mapActions("reduction", [
      "retrieveReductions",
    ]),
    ...mapActions("bill", [
      "retrieveBills",
    ]),
    ...mapActions("reservation", [
      "retrieveReservations",
    ]),
  },
  created(){
    this.retrieveRoles()
    this.retrieveUsers()
    this.retrieveClientTypes()
    this.retrieveSpaceTypes()
    this.retrieveSpaceStates()
    this.retrieveSpaces()
    this.retrieveClients()
    this.retrieveReductions()
    this.retrieveBills()
    this.retrieveReservations()
    console.log('before')
  }
});
</script>

<style src="./butler.scss" lang="scss" scoped/>

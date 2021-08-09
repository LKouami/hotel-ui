<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <b-tabs content-class="mt-3" justified>
          <b-tab title="Nouvelle Réservation" active><new-reservation/></b-tab>
          <b-tab title="Liste des réservations"><reservations/></b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import NewReservation from "../new-reservation/new-reservation.vue";
import Reservations from "../reservations/reservations.vue";

export default Vue.extend({
  name: "Home",
  components: {
      NewReservation,
      Reservations
  },
  data() {
    return {};
  },

  methods: {},

  computed: {},
});
</script>
<style src="./home.scss" lang="scss" scoped/>

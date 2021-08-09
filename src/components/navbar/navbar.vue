<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand class="ms-4" href="#" style=" font-size: 2rem">Butler</b-navbar-brand>
        <b-navbar-toggle  class="ms-auto me-3" target="nav-collapse">
            <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="arrow-bar-up"></b-icon>
        <b-icon v-else icon="arrow-bar-down"></b-icon>
      </template>
        </b-navbar-toggle>
       
      
    </b-navbar>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
export default Vue.extend({
  name: "Navbar",

  data() {
    return {
      timestamp: "",
    };
  },
});
</script>
<style src="./navbar.scss" lang="scss" scoped/>

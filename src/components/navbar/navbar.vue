<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand class="ms-3" href="#" style="font-weight: bold">Butler</b-navbar-brand>
        <b-navbar-toggle  class="ms-auto me-3" target="nav-collapse">
            <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="arrow-bar-up"></b-icon>
        <b-icon v-else icon="arrow-bar-down"></b-icon>
      </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="navBarRightItems" class="ms-lg-auto ms-3 me-5">
        <b-nav-item-dropdown text="Utilisateur" right>
          <b-dropdown-item href="#">Compte</b-dropdown-item>
          <b-dropdown-item href="#">Paramètre</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
        </b-collapse>
      
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

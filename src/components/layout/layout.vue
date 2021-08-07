<template>
  <div >
    <navbar/>
    <main>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
    <sidebar/>
        </div>
        <div class="col-lg-10 col-sm-8 col-xs-12 col-md-8 routerView">
        <router-view />
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import Navbar from '../navbar/navbar.vue'
import Sidebar from '../sidebar/sidebar.vue'
import Footer from '../footer/footer.vue'
export default Vue.extend({
  name: 'Layout',
 components: {
    Navbar,
    Sidebar,
    Footer
  }
})
</script>
<style src="./layout.scss" lang="scss" scoped/>


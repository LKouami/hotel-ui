<template>
  <div class="fill-container d-flex justify-content-center fillContainer">
    <div class="fill-container baseContainer">
     
    </div>
  </div>
</template>

<script lang="ts" >
import { Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
export default Vue.extend({
  name: "Butler",

  components: {
    
  },

  data() {
    return {};
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

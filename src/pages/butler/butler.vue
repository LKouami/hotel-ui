<template>
  <div class="fill-container">
      <home/>
    </div>
</template>

<script lang="ts" >
import { Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import Home from '@/components/content/home/home.vue'
export default Vue.extend({
  name: "Butler",

  components: {
    Home
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

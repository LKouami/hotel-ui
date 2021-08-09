<template>
  <div class="col p-0" id="navBar">
    <!-- <ul class="nav flex-column">
      <li class="nav-item dateTimeText">
        <a class="nav-link">{{ getNowDate() | formatDate }}</a>
      </li>
      <hr />
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: getCurrentSidebarElement === 'Home' }"
          @click="sideBarElementClick('Home')"
          aria-current="page"
          >Acceuil</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: getCurrentSidebarElement === 'Questions' }"
          @click="sideBarElementClick('Questions')"
          >Paramètres</a
        >
      </li>
     
    </ul> -->
    <b-list-group class="listGroupContainer">
      <b-list-group-item
      class="d-flex align-items-center p-2 listGroupItems"

  >
    <b-row class="m-0 w-100 align-items-center justify-content-between">
      <b-col class="d-flex" md="auto" cols="auto">
          <span class="material-icons">
        home
      </span>
      </b-col>
      <b-col class="d-flex p-0" align-self="start" md="" cols="auto"
      >Acceuil
      </b-col
      >
    </b-row>
  </b-list-group-item>
  <b-list-group-item
      class="d-flex align-items-center p-2 listGroupItems"

  >
    <b-row class="m-0 w-100 align-items-center justify-content-between">
      <b-col class="d-flex" md="auto" cols="auto">
          <span class="material-icons">
        settings
      </span>
      </b-col>
      <b-col class="d-flex p-0" align-self="start" md="" cols="auto"
      >Paramètres
      </b-col
      >
    </b-row>
  </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import moment from "moment";
import { mapGetters } from "vuex";
Vue.filter("formatDate", function (value: string) {
  if (value) {
    return moment(value).locale("fr").format("DD MMMM YYYY, HH:mm");
  }
});
export default Vue.extend({
  name: "Sidebar",
  data() {
    return {
      isHomeActive: false,
      isQuestionsActive: false,
      isFindAJobActive: false,
    };
  },

  methods: {
    getNowDate() : Date {
      const today = new Date();
      return  today;
    },
    sideBarElementClick(value: string) {
      this.$store.commit("sidebar/setCurrentSidebarElement", value);
    },
    activeHome() {
      this.isHomeActive = !this.isHomeActive;
    },
    activeQuestions() {
      this.isQuestionsActive = !this.isQuestionsActive;
    },
    activeFindAJob() {
      this.isFindAJobActive = !this.isFindAJobActive;
    },
  },

  computed: {
    ...mapGetters("sidebar", ["getCurrentSidebarElement"]),
  },

  created() {
    this.getNowDate();
    setInterval(this.getNowDate, 60000);
  },

});
</script>
<style src="./sidebar.scss" lang="scss" scoped/>

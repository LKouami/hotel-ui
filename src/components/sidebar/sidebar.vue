<template>
  <div class="col p-0" id="navBar">
   
   <b-list-group class="listGroupContainer">
      <b-list-group-item
      class="d-flex align-items-center p-2 listGroupItems"
      @click="assignCurrentMenu(home)"
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
      @click="showHideSettings()"

  >
    <b-row class="m-0 w-100 align-items-center justify-content-between">
      <b-col class="d-flex" md="auto" cols="auto">
          <span class="material-icons">
        settings
      </span>
      </b-col>
      <b-col class="d-flex p-0" align-self="start"  md="" cols="auto"
      >Paramètres
      </b-col
      >
      
    </b-row>
  </b-list-group-item>
  <b-collapse id="settings-collapse">
  <b-list-group-item
      class="d-flex align-items-center p-2 listGroupItems"
      v-for="item in items"
      :key="item.id"
      @click="assignCurrentMenu(item.baseName)"

  >
    <b-row class="m-0 w-100 align-items-center justify-content-between">
      <b-col class="d-flex" md="auto" cols="auto">
          <span class="material-icons">
        {{item.iconName}}
      </span>
      </b-col>
      <b-col class="d-flex p-0" align-self="start" @click="showHideSettings()" md="" cols="auto"
      >{{item.name}}
      </b-col
      >
      
    </b-row>
  </b-list-group-item>
  </b-collapse>
  
   <b-list-group-item
      class="d-flex align-items-center p-2 listGroupItems"
      @click="showHideSettings()"

  >
    <b-row class="m-0 w-100 align-items-center justify-content-between">
      <b-col class="d-flex" md="auto" cols="auto">
          <span class="material-icons">
        receipt
      </span>
      </b-col>
      <b-col class="d-flex p-0" align-self="start"  md="" cols="auto"
      >Facturation
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
import { mapGetters, mapActions } from "vuex";
import mock from './mock'
import commonVars from "@/common/core/commonVars";

Vue.filter("formatDate", function (value: string) {
  if (value) {
    return moment(value).locale("fr").format("DD MMMM YYYY, HH:mm");
  }
});
export default Vue.extend({
  name: "Sidebar",
  data() {
    return {
      home : commonVars.homeBaseName,
      items: mock.settingsTable
    };
  },

  methods: {
    ...mapActions('sidebar', ['setCurrentSidebarElement']),
    getNowDate() : Date {
      const today = new Date();
      return  today;
    },
    assignCurrentMenu(currentMenu : string) {
      this.setCurrentSidebarElement(currentMenu)
    },
    showHideSettings() {
      this.$root.$emit('bv::toggle::collapse', 'settings-collapse')
    }
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

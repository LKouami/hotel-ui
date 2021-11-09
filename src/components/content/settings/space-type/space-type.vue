<template>
  <div>
     <br>
    <div class="row">
        <h2>Type D'espace</h2>
        <b-button
          size="xs"
          class="mr-1 ml-2 mb-1 mt-1"
          variant="outline-success"
          @click="showModal('create')"
        >
          Nouveau
        </b-button>
    </div>
    <div class="row">
      <b-table 
      :items="dataToDisplay" 
      :fields="fields" 
      :tbody-tr-class="rowClass"
      >
      <template #cell(createdAt)="data">
          <div>
          {{ data.item._createdAt | formatDate  }}
          </div>
        </template>
      <template #cell(actions)="data">
        <b-button
          size="sm"
          class="mr-1"
          variant="outline-primary"
          @click="showUpdateModal('update', data)"
        >
          Modifier
        </b-button>
        <b-button
          size="sm"
          class="mr-1"
          variant="outline-danger"
          @click="showModal('delete')"
        >
          Supprimer 
        </b-button>
      </template>
    </b-table></div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Nouveau Type d'espace"
      v-model="getIsModalVisible"
      :hide-footer="true"
      @hidden="resetModal"
      scrollable 
      centered 
    >
      <modal :action="action" :data="data" />
    </b-modal>
    
  </div>
</template>

<script lang="ts">
import mock from "../../reservations/mock";
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { SpaceType } from "@/models/butler/SpaceType";
import { Utils } from "@/common/core/utils";
import Modal from "./modal/modal.vue";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});
export default Vue.extend({
  name: "SpaceType",
  components: {
    Modal,
  },
  data() {
    return {
      action: "",
      data: new SpaceType,
      isModalVisible : false,
      fields: [
        {
          key:"name",
          label:"Nom",
          thClass: "tableTh",
          sortable: false,
        }, 
        {
          key:"createdAt",
          label:"Date de création",
          thClass: "tableTh",
          sortable: false,  
        }, 
        {
          key:"actions",
          label:"Actions",
          thClass: "tableTh",
          sortable: false,
        }
        ],
    };
  },

  methods: {
    ...mapActions("space_type", [
      "retrieveSpaceTypes",
    ]),
    ...mapActions("butler", ["setIsModalVisible"]),
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },
    showModal(action: string) {
      // this.$root.$emit('bv::show::modal', 'modal-prevent-closing', '#btnShow')
      this.setIsModalVisible(true);
      this.isModalVisible = this.getIsModalVisible
      console.log(this.getIsModalVisible)
      this.action = action;
    },
    showUpdateModal(action: string, data: any) {
      // this.$root.$emit('bv::show::modal', 'modal-prevent-closing', '#btnShow')
      this.setIsModalVisible(true);
      this.isModalVisible = this.getIsModalVisible
      console.log(this.getIsModalVisible);
      this.action = action;
      this.data = data.item
      console.log(this.data);
    },
    resetModal(){
      this.setIsModalVisible(false);
      console.log(this.getIsModalVisible)
    }
  },

  computed: {
    ...mapGetters("space_type", [
      'getSpaceTypes'
    ]),
    ...mapGetters("butler", ["getIsModalVisible"]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): SpaceType[] {
      return Utils.sortByDate(this.getSpaceTypes)
    },
  },
});
</script>
<style src="./space-type.scss" lang="scss" scoped/>


<template>
  <div>
    <br />
    <div class="row">
      <h2>Utilisateur</h2>
      <b-button size="xs" class="mr-1 ml-2 mb-1 mt-1" variant="outline-success">
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
            {{ data.item._createdAt | formatDate }}
          </div>
        </template>
        <template #cell(role)="data">
          <div>
            {{ data.item.role.name  }}
          </div>
        </template>
        <template #cell(actions)="">
          <b-button size="sm" class="mr-1" variant="outline-primary">
            Modifier
          </b-button>
          <b-button size="sm" class="mr-1" variant="outline-danger">
            Supprimer
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import mock from "../../reservations/mock";
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Utils } from "@/common/core/utils";
import moment from "moment";
import { User } from "@/models/butler/User";
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});

export default Vue.extend({
  name: "User",
  data() {
    return {
      fieldsf: ["name", "email", "role", "Date de création", "actions"],
      fields: [
        {
          key: "name",
          label: "Nom",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "email",
          label: "Email",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "role",
          label: "Role",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "createdAt",
          label: "Date de création",
          thClass: "tableTh",
          sortable: false,
        },
        {
          key: "actions",
          label: "Actions",
          thClass: "tableTh",
          sortable: false,
        },
      ],
      items: mock.items,
    };
  },

  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.disponibilite === "libre") return "table-success";
    },
  },

  computed: {
    ...mapGetters("user", ["getUsers"]),
    rows(): number {
      return this.dataToDisplay.length;
    },

    dataToDisplay(): User[] {
      return Utils.sortByDate(this.getUsers);
    },
  },
});
</script>
<style src="./user.scss" lang="scss" scoped/>

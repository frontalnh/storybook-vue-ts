<template>
  <div id="checktable-component-wrapper">
    <v-data-table
      v-model="selectedItems"
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      :properties="properties"
      :hide-actions="true"
      :total-items="pagination.totalItems"
      :item-key="itemKey"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              primary
              hide-details
              @click.stop="selectAll(props)"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['text-xs-left']"
            @click="sortFunc(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="item">
        <tr :active="item.selected" @click="select(item)">
          <td>
            <v-checkbox :input-value="item.selected" primary hide-details></v-checkbox>
          </td>
          <td
            class="text-xs-left"
            v-for="property in properties"
            v-bind:key="property"
          >{{item.item[property]}}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="pagination-row">
      <template>
        <div class="text-xs-center">
          <v-pagination
            v-model="pagination.page"
            :length="Math.ceil(pagination.totalItems/10)"
            :total-visible="10"
            @input="setPage"
          ></v-pagination>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang='ts'>
import Component from "vue-class-component";
import { Vue, Prop, Provide, Watch, Emit } from "nuxt-property-decorator";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

class Pagination {
  descending: boolean;
  page: number;
  rowsPerPage: number; // -1 for All
  sortBy: string;
  totalItems: number;
}

@Component({})
export default class extends Vue {
  selectedItems = <any>[];
  @Prop() items: Array<any>;
  @Prop() headers: Array<any>;
  @Prop() properties: Array<any>;
  @Prop() itemKey: String;
  @Prop() totalCount: number;
  @Prop() page: number;

  pagination: Pagination = {
    descending: true,
    page: 1,
    rowsPerPage: 10, // -1 for All
    sortBy: "id",
    totalItems: 60
  };

  @Watch("totalCount")
  updateTotalCount(totalCount) {
    console.log("totalCount");
    this.pagination.totalItems = totalCount;
  }

  selectAll(props) {
    if (this.selectedItems.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.items;
    }
    this.$emit("onSelectAll", this.selectedItems);
  }

  @Watch("page")
  setPage(page: number) {
    this.$emit(
      "onPaginationChange",
      Object.assign(this.pagination, { page }),
      this.pagination
    );
  }

  select(item) {
    item.selected = !item.selected;
    this.$emit("onSelect", this.selectedItems);
  }
}
</script>
<style lang="scss">
#checktable-component-wrapper {
  .v-pagination__item--active {
    color: white !important;
  }
  .pagination-row {
    margin-top: 16px;
  }
}
</style>


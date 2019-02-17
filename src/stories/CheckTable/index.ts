import { storiesOf } from '@storybook/vue';
import CheckTable from './index.vue';

import { action } from '@storybook/addon-actions';
import { withKnobs, number, text, boolean, object, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
let datas = [
  { id: 1, name: 'hello1', selected: true },
  { id: 2, name: 'hello1', selected: true },
  { id: 3, name: 'hello1', selected: true },
  { id: 4, name: 'hello1', selected: true },
  { id: 5, name: 'hello1', selected: true },
  { id: 6, name: 'hello1', selected: true },
  { id: 7, name: 'hello1', selected: true },
  { id: 8, name: 'hello1', selected: true },
  { id: 9, name: 'hello1', selected: true },
  { id: 10, name: 'hello1', selected: true },
  { id: 11, name: 'hello1', selected: true },
  { id: 12, name: 'hello1', selected: true },
  { id: 13, name: 'hello1', selected: true },
  { id: 14, name: 'hello1', selected: true },
  { id: 15, name: 'hello1', selected: true },
  { id: 16, name: 'hello1', selected: true },
  { id: 17, name: 'hello1', selected: true },
  { id: 18, name: 'hello1', selected: true },
  { id: 19, name: 'hello1', selected: true },
  { id: 20, name: 'hello1', selected: true },
  { id: 21, name: 'hello1', selected: true }
];
let items = [
  { id: 1, name: 'hello1', selected: true },
  { id: 2, name: 'hello1', selected: true },
  { id: 3, name: 'hello1', selected: true },
  { id: 4, name: 'hello1', selected: true },
  { id: 5, name: 'hello1', selected: true },
  { id: 6, name: 'hello1', selected: true },
  { id: 7, name: 'hello1', selected: true },
  { id: 8, name: 'hello1', selected: true },
  { id: 9, name: 'hello1', selected: true },
  { id: 10, name: 'hello1', selected: true }
];
let pagination = {
  descending: true,
  page: 1,
  rowsPerPage: 10, // -1 for All
  sortBy: 'id',
  totalItems: 60
};
let selectedItems = [];

storiesOf('CheckTable', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'story as a component',
    () => ({
      components: { CheckTable },
      data() {
        return {
          headers: [{ text: 'Id', value: 'id' }, { text: 'Name', value: 'name' }],
          items,
          properties: ['id', 'name'],
          itemKey: 'id'
        };
      },
      methods: {
        sortFunc: function(property) {
          action('sort')(property);

          let list = [];
          for (let item of this.items) {
            list.unshift(item);
          }
          this.items = list;
        },
        onSelect: function(item) {
          action('onSelect')(item);
        },
        onSelectAll: function(items) {
          action('onSelectAll')(items);
        },
        onPaginationChange: function(newPagination, oldPagination) {
          action('onPaginationChange')(pagination);
          if (newPagination.page != oldPagination) {
            this.items = datas.slice((pagination.page - 1) * 10, pagination.page * 10);
          }
        }
      },
      props: {
        pagination: { default: object('pagination', pagination) }
      },
      template: `
      <CheckTable 
    :sortFunc="sortFunc" 
    :headers= "headers" 
    :items= "items" 
    :properties= "properties"
    :pagination="pagination"
    :itemKey="itemKey" 
    @onSelect = "onSelect"
    @onSelectAll = "onSelectAll"
    @onPaginationChange = "onPaginationChange" />
    `
    }),
    {
      notes: `
      @onSelect: 하나의 아이템이 선택되었을때 호출되며 선택된 item  들이 인자로 넘어온다.
      @onSelectAll: 모들 아이템이 선택되었을때 발생하는 이벤트로 선택된 모든 객에들이 넘어온다..
      @onPageChange: page 가 변경되었을때 이벤트가 날아오며 페이지가 인자로 넘어온다.
      `
    }
  );

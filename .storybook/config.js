import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
// Import your custom components.
import Mybutton from '../src/stories/MyButton/Button.vue';
import CheckTable from '../src/stories/CheckTable/index.vue';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import Vuetify from 'vuetify';

// Install Vue plugins.
Vue.use(Vuex);

Vue.use(Vuetify);
// Register custom components.

Vue.component('my-button', Mybutton);
Vue.component('CheckTable', CheckTable);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/CheckTable/index.ts');
  require('../src/stories/MyButton');
}

configure(loadStories, module);

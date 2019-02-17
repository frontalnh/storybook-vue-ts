import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Mybutton from '../src/stories/MyButton/Button.vue';
import CheckTable from '../src/stories/CheckTable/index.vue';
import ProgressBar from '../src/stories/ProgressBar/index.vue';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

// Install Vue plugins.
Vue.use(Vuetify);

// Register custom components.

Vue.component('my-button', Mybutton);
Vue.component('ProgressBar', ProgressBar);
Vue.component('CheckTable', CheckTable);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/CheckTable/index.ts');
  require('../src/stories/MyButton/index.ts');
  require('../src/stories/ProgressBar/index.ts');
}

configure(loadStories, module);

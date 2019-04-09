import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

import CustomButton from '../src/stories/custom-button/custom-button.vue';
import CheckTable from '../src/stories/CheckTable/CheckTable.vue';
import ProgressBar from '../src/stories/ProgressBar/index.vue';
import StatCard from '../src/stories/StatCard/index.vue';
import CustomTextInput from '../src/stories/CustomTextInput/index.vue';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

// Install Vue plugins.
Vue.use(Vuetify);

// Register custom components.

Vue.component('custom-button', CustomButton);
Vue.component('ProgressBar', ProgressBar);
Vue.component('CheckTable', CheckTable);
Vue.component('StatCard', StatCard);
Vue.component('CustomTextInput', CustomTextInput);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/CheckTable/index.ts');
  require('../src/stories/custom-button/index.ts');
  require('../src/stories/ProgressBar/index.ts');
  require('../src/stories/StatCard/index.ts');
  require('../src/stories/CustomTextInput/index.ts');
}

configure(loadStories, module);

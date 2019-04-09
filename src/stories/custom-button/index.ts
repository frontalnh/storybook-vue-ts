import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import CustomButton from './custom-button.vue';

Vue.component('custom-button', CustomButton);

storiesOf('custom-button', module)
  .add('story as a template', () => '<custom-button medium medium value="hello" color="blue"/>')
  .add('story as a component', () => ({
    components: { CustomButton },
    template: '<custom-button medium value="hello" color="blue"/>'
  }));

import { storiesOf } from '@storybook/vue';
import { withKnobs, number, text, boolean, object, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import CustomTextInput from './index.vue';

storiesOf('CustomTextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('standard', () => ({
    components: { CustomTextInput },
    props: { value: 'hello' },
    methods: {},
    template: `<CustomTextInput value="value"/>`
  }));

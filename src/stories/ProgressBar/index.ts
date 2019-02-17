import { storiesOf } from '@storybook/vue';
import ProgressBar from './index.vue';

import { action } from '@storybook/addon-actions';
import { withKnobs, number, text, boolean, object, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

storiesOf('ProgressBar', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'story as a component',
    () => ({
      components: { ProgressBar },
      methods: {},
      props: {},
      template: `
      <ProgressBar/>
    `
    }),
    {
      notes: `
      `
    }
  );

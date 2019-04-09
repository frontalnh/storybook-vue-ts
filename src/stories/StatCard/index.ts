import { storiesOf } from '@storybook/vue';
import StatCard from './index.vue';

import { action } from '@storybook/addon-actions';
import { withKnobs, number, text, boolean, object, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

let title = 'Total Visits';
let content = '34 원';
let icon = 'insert_chart';
let iconColor = 'blue darken-2';

storiesOf('StatCard', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'story as a component',
    () => ({
      components: { StatCard },
      methods: {
        click: function() {
          action('onClick')('clicked!');
        }
      },
      props: {
        title: { default: text('title', title) },
        content: { default: text('content', content) },
        icon: { default: text('icon', icon) },
        'icon-color': { default: text('icon-color', iconColor) }
      },
      template: `
      <StatCard 
      :title='title'
      :content='content'
      :onClick='click'
      color='royalblue'>
      <template v-slot:icon>
        <v-icon size='64px' color='blue darken-2'>insert_chart</v-icon>
      </template>
      </StatCard>
    `
    }),
    {
      notes: `
      'v-slot:icon': icon 에 들어갈 v-icon 을 넣어준다.
      'color': 콘텐트의 색을 정해준다.
      `
    }
  );

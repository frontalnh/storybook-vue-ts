# Storybook

## Vuetify

material design icon 이 나오지 않는 문제를 다음과 같이 해결하였다.

```sh
npm install --save material-design-icons-iconfont
```

preview-head.html 파일에 다음을 추가한다.

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" />
</head>
```

## addons

다음 세팅을 해주어야 한다.

```sh
yarn add -D @storybook/addons @storybook/addon-actions @storybook/addon-links @storybook/addon-notes
yarn add @storybook/addon-knobs --dev
```

.storybook/addons.js

```js
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-knobs/register';
```

스토리북에서 프로퍼티를 나타내기 위해 다음을 사용한다.

```sh
npm install storybook-addon-vue-info
```

config.js

```js
import { addDecorator } from '@storybook/vue';

import { withInfo } from 'storybook-addon-vue-info';

addDecorator(withInfo);
```

## State

```sh
npm i @sambego/storybook-state
```

```js
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  active: false
});

storiesOf('Button', module).add('with text', () => (
  <div>
    <State store={store}>
      <Modal>Modal content</Modal>
    </State>
    <Button onClick={() => store.set({ active: !store.get('active') })} />
  </div>
));
```

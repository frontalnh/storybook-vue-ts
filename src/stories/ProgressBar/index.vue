<template>
  <v-progress-circular
    :rotate="90"
    :size="size"
    :width="width"
    :value="value"
    color="red"
  >{{ value }}</v-progress-circular>
</template>

<script lang='ts'>
import Component from "vue-class-component";
import { Vue, Prop, Provide, Watch, Emit } from "nuxt-property-decorator";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

@Component({})
export default class extends Vue {
  @Prop() size = 100;
  @Prop() value = 50;
  @Prop() width = 15;
}
</script>
<style lang="scss">
.v-progress-circular__info {
  font-weight: 400;
  font-size: 24px;
}
</style>


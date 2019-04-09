<template>
  <input type="text" :value="value" class="custom-text-input">
</template>
<script lang='ts'>
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() value: string;
}
</script>
<style lang="scss">
.custom-text-input {
  border: 1px solid gray;
  height: 32px;
  width: 160px;
  border-radius: 4px;
  padding: 4px;
}
</style>


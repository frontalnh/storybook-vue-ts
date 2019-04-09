<template>
  <button id="custom-button" :class="getClass()">{{value}}</button>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  props: {
    color: String,
    value: String,
    small: Boolean,
    medium: Boolean
  }
})
export default class extends Vue {
  getClass() {
    let color = this.$props.color;
    let obj = {};

    obj[color] = true;
    obj["small"] = this.$props.small;
    obj["medium"] = this.$props.medium;
    console.log("obj:", obj);
    return obj;
  }
}
</script>
<style lang="scss">
#custom-button {
  color: black;
}
</style>


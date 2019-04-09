<template>
  <v-card>
    <v-card-title primary-title>
      <div id="container">
        <h3 class="headline mb-0" id="title">{{title}}</h3>
        <div id="content" v-bind:style="{'color':color}">
          <span id="icon">
            <slot name="icon"></slot>
          </span>
          {{convertedContent}}
        </div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange" id="detail" @click="onClick">details...</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>
import Component from "vue-class-component";
import { Vue, Prop, Provide, Watch, Emit } from "nuxt-property-decorator";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import { number } from "prop-types";

@Component({})
export default class extends Vue {
  @Prop() title;
  @Prop() content;
  @Prop() color;
  @Prop() onClick;

  get convertedContent() {
    if (typeof +this.content == "number") {
      if (parseInt(this.content, 10) >= 0) this.content = "+" + this.content;
    }
    return this.content;
  }
}
</script>
<style lang="scss">
.v-card {
  max-width: 700px;
  padding: 16px;
  #container {
    width: 100%;
    #title {
      font-size: 24px !important;
      margin-bottom: 24px !important;
      text-align: left !important;
    }

    #content {
      position: relative;
      #icon {
        position: absolute;
        left: 0;
      }
      width: 100% !important;
      text-align: right !important;
      font-size: 40px !important;
      font-weight: 400 !important;
    }
  }
  .v-card-actions {
    text-align: right !important;
    .v-btn {
      display: inline-block;
    }
  }
}
</style>


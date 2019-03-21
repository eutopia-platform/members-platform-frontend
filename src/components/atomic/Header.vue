<template>
  <TextBase class="header" v-bind:class=" {
    'primary': this.type === 'primary',
    'secondary': this.type === 'secondary',
    'tertiary': this.type === 'tertiary',
    'quaternary': this.type === 'quarternary',
    } ">
    <slot></slot>
  </TextBase>
</template>

<script>
import TextBase from './TextBase.vue'

export default {
  name: "Header",
  extends: TextBase,
  components: {
    TextBase
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/text.scss";

.header {
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  margin-top: .5em;
  margin-bottom: .5em;

  img {
    height: 1.5em;
    transform: translateY(.25em);
    margin-right: .5em;
    display: inline-block;
  }
}

.primary {
  font-size: $fs-header-1;
}

.secondary {
  font-size: $fs-header-2;
}

.tertiary {
  font-size: $fs-header-3;
}

.quaternary {
  font-size: $fs-header-4;
}
</style>

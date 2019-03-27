<template>
  <TextBase class="small" v-bind:class="colorClass">
    <slot></slot>
  </TextBase>
</template>

<script>
import TextBase from './TextBase.vue'
export default {
  name: "Small",
  extends: TextBase,
  components: {
    TextBase
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.small {
  font-size: $fs-small;
}
</style>

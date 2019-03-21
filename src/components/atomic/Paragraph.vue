<template>
  <TextBase class="paragraph" v-bind:class="colorClass">
    <slot></slot>
  </TextBase>
</template>

<script>
import TextBase from './TextBase.vue'

export default {
  name: "Paragraph",
  extends: TextBase,
  components: {
    TextBase
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.paragraph {
  font-size: $fs-base;
}
</style>

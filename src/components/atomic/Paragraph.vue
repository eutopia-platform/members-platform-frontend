<template>
  <TextBase class="paragraph"
v-bind:class="colorClass">
    <slot />
  </TextBase>
</template>

<script>
import TextBase from "./TextBase.vue";

export default {
  name: "Paragraph",
  components: {
    TextBase
  },
  extends: TextBase
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.paragraph {
  font-size: $fs-base;
}
</style>

<template>
  <div class="paragraph">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Paragraph",
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.paragraph {
  font-size: $fs-base;
}
</style>

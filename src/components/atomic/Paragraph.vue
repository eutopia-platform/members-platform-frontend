<template>
  <div class="pararaph">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Paragraph"
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";

.paragraph {
  font-size: $fs-base;
}
</style>

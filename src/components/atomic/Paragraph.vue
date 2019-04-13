<template>
  <p class="paragraph" :class="{small: small}">
    <slot/>
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    small: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.paragraph {
  font-size: $fs-base;
}

.small {
  font-size: 80%;
}
</style>

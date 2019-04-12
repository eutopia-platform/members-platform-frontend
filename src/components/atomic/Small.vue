<template>
  <small class="small">
    <slot/>
  </small>
</template>

<script>
export default {
  name: "Small"
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.small {
  font-size: $fs-small;
}
</style>

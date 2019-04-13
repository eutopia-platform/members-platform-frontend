<template>
  <div class='card'>
    <!-- asdf -->
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang='scss' scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shadows.scss";

.card {
  @include colorScheme('neutral');
  min-width: 5rem;
  min-height: 5rem;
  padding: 1rem;
  box-sizing: border-box;
  display: table;

  box-shadow: $shadow-default;
}
</style>

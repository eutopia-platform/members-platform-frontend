<template>
  <hr />
</template>

<script>
export default {
  name: "LineHorizontal"
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors.scss';

hr {
  height: 2px;
  margin-bottom: 1em;
  border: none;
  @include colorScheme('secondary')
}
</style>

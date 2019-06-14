<template>
  <Component :is="navigation ? 'nav' : 'div'" :class="getClass">
    <slot></slot>
  </Component>
</template>

<script>
import Molecular from '/scripts/molecular'

export default new Molecular({
  name: 'Menu',
  types: ['top' /*sidebar*/],
  props: {
    navigation: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors';
@import '/styles/shadows';

.menu {
  @include colorScheme('surface');
  box-shadow: shadow(2);
  position: fixed;
  z-index: 500;
}

.top {
  width: 100%;
  min-height: 2rem;
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <Component :is="navigation ? 'nav' : 'div'" :class="getClass">
    <slot></slot>
  </Component>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

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
@import '/components/sharedStyles/colors';
@import '/components/sharedStyles/shadows';

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

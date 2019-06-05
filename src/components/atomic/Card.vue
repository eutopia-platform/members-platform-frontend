<template>
  <div class="card" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Card',
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors.scss';
@import '../sharedStyles/shadows.scss';

.card {
  @include colorScheme('surface');
  min-width: 5rem;
  min-height: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  overflow: auto;
  box-shadow: shadow(2);
  z-index: 2;
}
</style>

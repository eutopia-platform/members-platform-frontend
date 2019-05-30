<template>
  <button type="button" :class="getClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Button',
  types: ['default', 'secondary'],
  props: {
    img: String,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';
@import '/components/sharedStyles/shadows';

.button {
  border: none;
  font-size: 1rem;
  min-width: 2rem;
  @include colorScheme('primary');
  height: calc(1.5 * var(--baseline));
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.25rem;
}

.secondary {
  @include colorScheme('secondary');
}
</style>

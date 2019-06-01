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
  background-color: color('surface');
  border: 2px solid color('primary');
  color: color('primary');
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color, background-color 0.2s ease;

  &:hover {
    background-color: color('primary');
    color: color('on-primary');
  }
}

.secondary {
  border: 2px solid color('secondary');
  color: color('secondary');

  &:hover {
    background-color: color('secondary');
    color: color('on-secondary');
  }
}
</style>

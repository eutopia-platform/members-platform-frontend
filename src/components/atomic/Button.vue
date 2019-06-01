<template>
  <button type="button" :class="getClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Button',
  types: ['default', 'primary', 'secondary'],
  props: {
    img: String,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';
@import '/components/sharedStyles/shadows';

.button {
  font-size: 1rem;
  min-width: 2rem;
  background-color: color('surface');
  border: 0.125rem solid color('on-surface');
  border-radius: 0.25rem;
  color: color('on-surface');
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0;
  padding-bottom: 0;
  cursor: pointer;
  transition: color, background-color 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    background-color: color('on-surface');
    color: color('surface');
  }
}

.primary {
  border: 2px solid color('primary');
  color: color('primary');

  &:hover,
  &:focus {
    background-color: color('primary');
    color: color('on-primary');
  }
}

.secondary {
  border: 2px solid color('secondary');
  color: color('secondary');

  &:hover,
  &:focus {
    background-color: color('secondary');
    color: color('on-secondary');
  }
}
</style>

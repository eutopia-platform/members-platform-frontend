<template>
  <button type="button" :class="getClass" @click="$emit('click')">
    <slot v-if="type !== 'icon'"></slot>
    <img v-if="type === 'icon'" :src="img" />
  </button>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Button',
  types: ['default', 'text', 'icon', 'big', 'small'],
  props: {
    img: String,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';
@import '/components/sharedStyles/shadows.scss';

.button {
  border: none;
  font-size: 1rem;
  min-width: 2rem;

  &:not(.icon) {
    border-radius: 0.4rem;
  }

  &:not(.text, .small) {
    box-sizing: border-box;
    min-height: 2rem;
    vertical-align: top;
  }

  &:not(.text):not(.icon) {
    box-shadow: $shadow-default;
  }

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-top: 1rem;

  background-color: #6bc1ff; // TODO: standardize colors
  color: white;
  box-shadow: none;
  cursor: pointer;

  &:disabled {
    background-color: #d3d3d3;
  }
}

.text {
  background-color: inherit;
  color: #6bc1ff;
}

.big {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.small {
  font-size: 0.8rem;
  line-height: 1rem;
  border-radius: 0.3rem;
}

.icon {
  background-color: inherit;
  padding: 0;
  * {
    margin: 0;
  }
}
</style>

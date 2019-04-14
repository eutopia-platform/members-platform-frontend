<template>
  <button :class='getClass' @click='$emit("click")'>
    <slot v-if='type !== "icon"'></slot>
    <img v-if='type === "icon"' :src='img'/>
  </button>
</template>

<script>
import Atomic from '/components/sharedScripts/atomic'
import Icon from './Icon.vue'

export default new Atomic({
  name: 'Button',
  types: ['default', 'text', 'icon', 'big'],
  props: {
    img: String
  }
})
</script>

<style lang='scss' scoped>
@import '/components/sharedStyles/colors.scss';
@import '/components/sharedStyles/shadows.scss';

.button {
  border: none;
  font-size: 1rem;
  min-width: 2rem;

  &:not(.icon) {
    border-radius: .25rem;
  }

  &:not(.text) {
    box-sizing: border-box;
    min-height: 2rem;
    vertical-align: top;
  }

  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .2rem;
  padding-bottom: .2rem;
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
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .8rem;
  padding-bottom: .8rem;
}

.icon {
  background-color: inherit;
  padding: 0;
}
</style>

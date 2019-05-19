<template>
  <div :class="getClass" :style="alignStyle">
    <slot></slot>
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

export default new Molecular({
  name: 'Item',
  props: {
    text: {
      type: String,
    },
    align: {
      type: String,
      default: '',
    },
  },
  data: {
    alignment: '',
  },
  computed: {
    alignStyle() {
      switch (this.alignment) {
        case 'right':
          return {
            'margin-left': 'auto',
          }
      }
    },
  },
  created() {
    this.alignment = this.align
    if (
      this.align === 'right' &&
      this.$parent.$slots.default.some(
        node =>
          node.componentInstance &&
          node.componentInstance.$options.propsData.align &&
          node.componentInstance.$options.propsData.align === 'right'
      )
    )
      this.alignment = ''
  },
})
</script>

<style lang="scss" scoped>
.item {
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;

  span {
    position: relative;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    margin-top: auto;
    user-select: none;
  }
}
</style>

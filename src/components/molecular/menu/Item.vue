<template>
  <div :class="getClass" :style="alignStyle" @click="onClick">
    <slot class="slot"></slot>
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Molecular from '/scripts/molecular'

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
    link: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    alignment: '',
  }),
  computed: {
    alignStyle() {
      // TODO: allow left aligned items after right aligned items
      switch (this.alignment) {
        case 'right':
          return {
            'margin-left': 'auto',
          }
        case 'center':
          return {
            'margin-left': 'auto',
            'margin-right': 'auto',
          }
      }
    },
  },
  methods: {
    onClick() {
      if (this.link) this.$router.push(this.link)
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

  * {
    position: relative;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    user-select: none;
  }
}
</style>

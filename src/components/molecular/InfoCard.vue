<template>
  <Card :class="getClass">
    <Icon n :src="iconInfo"></Icon>
    <slot></slot>
    <Icon class="close" name="close" @click="close"></Icon>
  </Card>
</template>

<script>
import Molecular from '~/scripts/molecular'

export default new Molecular({
  name: 'InfoCard',
  computed: {
    iconInfo: () => require('/../data/img/ui/info.svg'),
    iconClose: () => require('/../data/img/ui/close.svg'),
  },
  methods: {
    close: function() {
      this.$el.style.display = 'none'
    },
  },
})
</script>

<style lang="scss" scoped>
.card.info-card {
  overflow: hidden;
  grid-column: 1/-1;
  position: relative;
  display: flex;
  *:nth-child(1n) {
    margin-right: 1.5rem;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    background-color: transparent;
  }
}
</style>

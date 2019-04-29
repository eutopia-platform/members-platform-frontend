<template>
  <Card :class="getClass">
    <Icon :src="iconInfo"></Icon>
    <slot></slot>
    <Button
      icon
      class="close"
      type="icon"
      :img="iconClose"
      @click="close"
    ></Button>
  </Card>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Card from '/components/atomic/Card'
import Icon from '/components/atomic/Icon'
import Button from '/components/atomic/Button'

export default new Molecular({
  name: 'InfoCard',
  components: {
    Card,
    Icon,
    Button,
  },
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
.info-card {
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

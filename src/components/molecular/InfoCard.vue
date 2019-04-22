<template>
  <Card :class='getClass'>
    <Icon :src="iconInfo"></Icon>
    <slot></slot>
    <Button
        icon
        @click='close'
        class='close'
        type='icon'
        :img='iconClose'
      ></Button>
  </Card>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Card from '/components/atomic/Card'
import Icon from '/components/atomic/Icon'
import Button from '/components/atomic/Button'

export default new Molecular({
  name: "InfoCard",
  components: {
    Card,
    Icon,
    Button,
  },
  computed: {
    iconInfo: () => require('/../data/img/ui/info.svg'),
    iconClose: () => require('/../data/img/ui/close.svg')
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
    margin-top: .3rem;
    margin-right: .3rem;
    background-color: transparent;
  }
}
</style>

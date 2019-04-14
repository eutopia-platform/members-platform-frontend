<template>
  <Card>
    <div class='info'>
      <Icon :src='iconInfo'></Icon>
      <Paragraph>
        Welcome to the dashboard of your workspace &mdash; the new home of your
        project.
        <Break></Break>
        Manage toolkits and processes and always stay on top of the progress your team is making.
      </Paragraph>
      <Button @click='close' class='close' type='icon' :img='iconClose'></Button>
    </div>
  </Card>
</template>

<script>
import Card from '/components/atomic/Card'
import Paragraph from '/components/atomic/Paragraph'
import Break from '/components/atomic/Break'
import Button from '/components/atomic/Button'
import Icon from '/components/atomic/Icon'

export default {
  name: 'WelcomeInfo',
  components: {
    Card,
    Paragraph,
    Break,
    Button,
    Icon
  },
  methods: {
    close: function() {
      this.$el.style.display = 'none'
    }
  },
  computed: {
    iconInfo: () => require('/../data/img/ui/info.svg'),
    iconClose: () => require('/../data/img/ui/close.svg')
  }
}
</script>

<style lang='scss' scoped>
.info {
  position: relative;
  display: flex;
  *:nth-child(1n) {
    margin-right: 1.5rem;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -.5rem;
    margin-right: -.5rem;
  }
}
</style>

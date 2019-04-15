<template>
  <Card :class="getClass">
    <div>
      <Icon :src="img"></Icon>
      <Header quaternary>
        {{ name }}
      </Header>
    </div>
  </Card>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Header from '/components/atomic/Header'
import Card from '/components/atomic/Card'
import Icon from '/components/atomic/Icon'

export default new Molecular({
  name: 'ToolkitCard',
  components: {
    Header,
    Icon,
    Card,
  },
  props: {
    name: String,
  },
  computed: {
    img: () => require('/../data/img/toolkits/placeholder.svg'),
  },
})
</script>

<style lang="scss" scoped>
.toolkit-card {
}
</style>

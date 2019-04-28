<template>
  <Card class="metric-card">
    <Icon :src="img"></Icon>
    <Header secondary>{{val}}</Header>
    <Paragraph>{{name}}</Paragraph>
    <Small :style="cl_percent">{{percent + '%'}}</Small>
  </Card>
</template>

<script>
import Card from '/components/atomic/Card'
import Icon from '/components/atomic/Icon'
import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'
import Small from '/components/atomic/Small'

export default {
  name: 'MetricCard',
  components: {
    Card,
    Icon,
    Header,
    Paragraph,
    Small,
  },
  props: {
    img: String,
    val: String,
    name: String,
    percent: Number,
  },
  computed: {
    cl_percent: function() {
      return {
        color: this.percent >= 0 ? 'green' : 'red'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.metric-card {
  text-align: center;
}
</style>

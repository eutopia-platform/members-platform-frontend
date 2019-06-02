<template>
  <Card class="metric-card">
    <Icon :src="img"></Icon>
    <Header s2>{{ val }}</Header>
    <Paragraph>{{ name }}</Paragraph>
    <Small :style="cl_percent">{{ percent + '%' }}</Small>
  </Card>
</template>

<script>
export default {
  name: 'MetricCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    val: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    cl_percent: function() {
      return {
        color: this.percent >= 0 ? 'green' : 'red',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.metric-card {
  text-align: center;
}
</style>

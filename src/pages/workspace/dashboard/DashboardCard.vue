<template>
  <Card class="db-card">
    <Header tertiary>
      {{ title }}
    </Header>
    <LineHorizontal class="hl"></LineHorizontal>
    <slot />
  </Card>
</template>

<script>
import Card from '/components/atomic/Card'
import Header from '/components/atomic/Header'
import LineHorizontal from '/components/atomic/LineHorizontal'

export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: 'unknown title',
    },
  },
  components: {
    Card,
    Header,
    LineHorizontal,
  },
}
</script>

<style lang="scss" scoped>
.db-card {
  min-height: 20rem;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  .hl {
    margin-top: 1rem;
    margin-left: -1.5rem;
    width: calc(100% + 3rem);
  }
}
</style>

<template>
  <Card :class="getClass">
    <div class="top">
      <Header s3>{{ title }}</Header>
      <Button>{{ button }}</Button>
    </div>
    <slot></slot>
  </Card>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: 'Dashboard Card',
    },
    button: {
      type: String,
      default: 'Button',
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard-card {
  .top {
    display: flex;
    align-items: center;
    height: calc(3 * var(--baseline));

    .button {
      margin-left: auto;
    }
  }
}
</style>

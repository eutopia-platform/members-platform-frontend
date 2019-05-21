<template>
  <Card class="db-card">
    <div class="title-bar">
      <Header tertiary>{{ title }}</Header>
      <Button v-if="button" small :disabled="disabled" @click="$emit('action')">
        {{ button }}
      </Button>
    </div>
    <LineHorizontal class="hl"></LineHorizontal>
    <slot />
  </Card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: 'unknown title',
    },
    button: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.db-card {
  min-height: 20rem;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  .title-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .button {
      height: 2rem;
      position: relative;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>

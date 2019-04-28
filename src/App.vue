<template>
  <RouterView class="app"></RouterView>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import './components/sharedStyles/colors.scss';

.app {
  @include colorScheme('neutral');
}
</style>

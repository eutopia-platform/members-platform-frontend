<template>
  <router-view class="app"></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './components/sharedStyles/colors.scss';

.app {
  @include colorScheme('neutral');
}
</style>

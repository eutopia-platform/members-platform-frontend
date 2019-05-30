<template>
  <div class="shade"></div>
</template>

<script>
export default {
  name: 'Shade',
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors.scss';

.shade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(color('surface'), 50%);
}
</style>

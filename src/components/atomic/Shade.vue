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
  background-color: rgba(color('primary'), 50%);
  z-index: 9000;
}
</style>

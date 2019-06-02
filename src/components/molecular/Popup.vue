<template>
  <div class="popup">
    <Shade></Shade>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/shadows.scss';

.content {
  position: fixed;
  min-width: 20vw;
  min-height: 20vw;
  background-color: white;
  display: block;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: shadow(2);
  z-index: 9001;
}
</style>

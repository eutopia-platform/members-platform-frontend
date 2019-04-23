<template>
  <div class="popup">
    <Shade></Shade>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Shade from '../atomic/Shade.vue'

export default {
  name: 'Popup',
  components: {
    Shade,
  },
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/shadows.scss';

.content {
  position: absolute;
  min-width: 20vw;
  min-height: 50vh;
  background-color: white;
  display: block;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: $shadow-default;
}
</style>

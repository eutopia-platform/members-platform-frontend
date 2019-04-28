<template>
  <div class="page-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageSlide',
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors.scss';
@import '../sharedStyles/shapes.scss';
@import '../sharedStyles/responsive.scss';

.page-slide {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    height: auto;
  }
}
</style>

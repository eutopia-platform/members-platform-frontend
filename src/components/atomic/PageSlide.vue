<template>
  <div class="page-slide">
    <slot></slot>
  </div>
</template>

<script>
const PageSlide = {
  name: "PageSlide"
};

export default PageSlide;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.page-slide {
    width: 100%;
    height: 100vh;
}
</style>

<template>
  <div class="page-slide">
    <div class="half half-left">
      <slot name="left"></slot>
    </div>
    <div class="half half-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
const PageSlide = {
  name: "PageSlide",
  props: {
    imgSrcRight: String
  }
};

export default PageSlide;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.page-slide {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border-bottom: 1px red solid;

    .half {
        width: 50%;
        display: block;
        flex-grow: 1;
    } 

    .half-left {
      padding: 5rem;
    }

    .half-right {
      background-color: $c-primary-notsointense;
    }
}

</style>

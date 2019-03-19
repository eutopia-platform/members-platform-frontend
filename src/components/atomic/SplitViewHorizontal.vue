<template>
  <div class="splitview-horizontal">
    <div class="half half-left">
      <slot name="left"></slot>
    </div>
    <div class="half half-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
const SplitViewHorizontal = {
  name: "SplitViewHorizontal"
};

export default SplitViewHorizontal;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/responsive.scss";

.splitview-horizontal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;

    @media screen and (max-width: $break-mobile) {
      flex-direction: column;
      height: 150vh;
      height: auto;
    }

    .half {
        width: 50%;
        display: block;
        flex-grow: 1;
        overflow: hidden;
        box-sizing: border-box;

        img {
          max-width: 100%;
          max-height: 100%;
          position: relative;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 1;
        }

        @media screen and (max-width: $break-mobile) {
          width: 100%;
          display: block;
        }
    }

    .half-left {
      min-height: 100vh;
      z-index: 5;
    }

    .half-right {
      background-color: $c-primary-light;

      @media screen and (max-width: $break-mobile) {
        height: 50vh;
      }
    }
}
</style>

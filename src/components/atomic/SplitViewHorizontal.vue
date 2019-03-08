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

.splitview-horizontal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    border-bottom: 1px red solid;

    .half {
        width: 50%;
        display: block;
        flex-grow: 1;
        overflow: hidden;
        box-sizing: border-box;
    }

    .half-left {
      // padding: 5rem;
    }

    .half-right {
      background-color: $c-primary-notsointense;
    }
}
</style>

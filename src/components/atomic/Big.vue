<template>
  <p :class="getClass">
    <slot></slot>
  </p>
</template>

<script>
import Atomic from '/scripts/component'

export default new Atomic({
  name: 'Big',
  types: ['default', 'extra'],
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/text';
@import '../sharedStyles/fluid';
@import '../sharedStyles/math';

.big {
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 1),
    $rem-max * pow($fs-scale-max, 1),
    $fs-min-screen,
    $fs-max-screen
  );
}

.extra {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 2),
    $rem-max * pow($fs-scale-max, 2),
    $fs-min-screen,
    $fs-max-screen
  );
  @media screen and (min-width: 500px) {
    line-height: calc(2 * var(--baseline));
  }
}
</style>

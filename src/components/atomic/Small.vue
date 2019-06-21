<template>
  <p :class="getClass">
    <slot></slot>
  </p>
</template>

<script>
import Atomic from '~/scripts/component'

export default new Atomic({
  name: 'Small',
})
</script>

<style lang="scss" scoped>
@import '/styles/text';
@import '/styles/fluid';
@import '/styles/math';

.small {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, -1),
    $rem-max * pow($fs-scale-max, -1),
    $fs-min-screen,
    $fs-max-screen
  );
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
  line-height: var(--baseline);
}
</style>

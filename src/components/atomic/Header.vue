<template>
  <Component :is="tag" :class="getClass">
    <slot />
  </Component>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Header',
  types: ['primary', 'secondary', 'tertiary', 'quaternary'],
  tags: ['h1', 'h2', 'h3', 'h4'],
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors';
@import '../sharedStyles/shapes';
@import '../sharedStyles/text';
@import '../sharedStyles/fluid';
@import '../sharedStyles/math';

.header {
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.primary {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 3),
    $rem-max * pow($fs-scale-max, 3),
    $fs-min-screen,
    $fs-max-screen
  );
  line-height: calc(2 * var(--baseline));
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.secondary {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 2),
    $rem-max * pow($fs-scale-max, 2),
    $fs-min-screen,
    $fs-max-screen
  );
  line-height: calc(2 * var(--baseline));
  @media screen and (max-width: 500px) {
    line-height: var(--baseline);
  }
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.tertiary {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 1),
    $rem-max * pow($fs-scale-max, 1),
    $fs-min-screen,
    $fs-max-screen
  );
  line-height: calc(2 * var(--baseline));
  @media screen and (max-width: 850px) {
    line-height: var(--baseline);
  }
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.quaternary {
  @include fluid(
    font-size,
    $rem-min * pow($fs-scale-min, 0),
    $rem-max * pow($fs-scale-max, 0),
    $fs-min-screen,
    $fs-max-screen
  );
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}
</style>

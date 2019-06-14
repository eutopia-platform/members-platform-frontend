<template>
  <Component :is="tag" class="header" :class="{ s1, s2, s3, s4, s5, inline }">
    <slot />
  </Component>
</template>

<script>
import Atomic from '/scripts/atomic'

export default new Atomic({
  name: 'Header',
  types: ['s1', 's2', 's3', 's4', 's5'],
  tags: ['h1', 'h2', 'h3', 'h4', 'h5'],
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors';
@import '/styles/shapes';
@import '/styles/text';
@import '/styles/fluid';
@import '/styles/math';

.header {
  font-weight: 500;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.inline {
  margin: 0;
  display: inline-block;
}

@for $i from 1 through 5 {
  .s#{$i} {
    @include fluid(
      font-size,
      $rem-min * pow($fs-scale-min, 4 - $i),
      $rem-max * pow($fs-scale-max, 4 - $i),
      $fs-min-screen,
      $fs-max-screen
    );
  }
}

.s1 {
  line-height: calc(2 * var(--baseline));
}

.s2 {
  @media screen and (min-width: 500px) {
    line-height: calc(2 * var(--baseline));
  }
}

.s3 {
  @media screen and (min-width: 850px) {
    line-height: calc(2 * var(--baseline));
  }
}
</style>

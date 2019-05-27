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
@import '../sharedStyles/colors.scss';
@import '../sharedStyles/shapes.scss';
@import '../sharedStyles/text.scss';

.header {
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.primary {
  font-size: $fs-header-1;
  line-height: calc(2 * var(--baseline));
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.secondary {
  font-size: $fs-header-2;
  line-height: calc(2 * var(--baseline));
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.tertiary {
  font-size: $fs-header-3;
  line-height: calc(2 * var(--baseline));
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.quaternary {
  font-size: $fs-header-4;
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}
</style>

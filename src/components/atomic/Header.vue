<template>
  <component :is="tag" :class="getClass">
    <slot />
  </component>
</template>

<script>
import Atomic from '/components/sharedScripts/atomic'

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
}

.secondary {
  font-size: $fs-header-2;
}

.tertiary {
  font-size: $fs-header-3;
}

.quaternary {
  font-size: $fs-header-4;
}
</style>

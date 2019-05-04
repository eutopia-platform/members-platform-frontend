<template>
  <p class="paragraph" :class="getClass">
    <slot />
  </p>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Paragraph',
  types: ['default', 'small'],
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/text.scss';
@import '../sharedStyles/colors.scss';

.paragraph {
  font-size: $fs-base;
}

.small {
  font-size: 80%;
}
</style>

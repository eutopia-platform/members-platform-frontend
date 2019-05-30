<template>
  <p class="paragraph" :class="{ small, inline }">
    <slot />
  </p>
</template>

<script>
import Atomic from '../sharedScripts/atomic'

export default new Atomic({
  name: 'Paragraph',
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/text.scss';
@import '../sharedStyles/colors.scss';

.paragraph {
  font-size: $fs-base;
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.inline {
  margin: 0;
  display: inline-block;
}
</style>

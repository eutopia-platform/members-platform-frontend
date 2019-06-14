<template>
  <p class="paragraph" :class="{ inline }">
    <slot />
  </p>
</template>

<script>
import Atomic from '/scripts/atomic'

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
  font-size: 1rem;
  line-height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.inline {
  margin: 0;
  display: inline-block;
}
</style>

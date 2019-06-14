<template>
  <img
    class="icon"
    :class="{ color: recolor, small, big }"
    :src="
      name.length === 0
        ? src
        : `https://s3.eu-central-1.amazonaws.com/eutopia.media${
            !name.includes('/') ? '/ui/icons/' : '/'
          }${name}.svg`
    "
    :aria="aria"
    @click="$emit('click')"
  />
</template>

<script>
import Atomic from '~/scripts/atomic'

export default new Atomic({
  name: 'Icon',
  types: ['default', 'small', 'big'],
  props: {
    src: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    aria: {
      type: String,
      default: '',
    },
    recolor: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors';

.icon {
  height: var(--baseline);
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}

.small {
  height: calc(2 / 3 * var(--baseline));
  margin-top: calc(var(--baseline) + var(--baseline) / 6);
  margin-top: calc(var(--baseline) + var(--baseline) / 6);
}

.big {
  height: calc(4 / 3 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 6);
  margin-top: calc(var(--baseline) - var(--baseline) / 6);
}

.color {
  filter: $icon-filter;
}
</style>

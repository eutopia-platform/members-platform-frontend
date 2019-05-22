<template>
  <img
    class="icon"
    :class="{ color: recolor }"
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
export default {
  name: 'Icon',
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
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.color {
  filter: $icon-filter;
}
</style>

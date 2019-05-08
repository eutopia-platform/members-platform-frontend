<template>
  <img class="icon" :src="src" :aria="aria" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'initial',
    },
    aria: {
      type: String,
      default: '',
    },
  },
}
</script>

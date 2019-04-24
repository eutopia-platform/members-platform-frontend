<template>
  <img :src="src" />
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
  },
}
</script>

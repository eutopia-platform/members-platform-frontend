<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: String,
    size: {
      type: String,
      default: 'initial',
    },
  },
}
</script>

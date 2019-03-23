<template>
  <div class="icon" :style="styleObject"></div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    src: String,
    size: {
      type: String,
      default: "initial"
    }
  },
  computed: {
    styleObject: comp => ({
      'background-image': `url(${comp.src})`,
      'width': comp.size,
      'height': comp.size
    })
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  min-height: 1rem;
  min-width: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>

<template>
  <div class="icon">
    <img v-bind:src="src" v-bind:height="height" v-bind:width="width"/>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    src: String,
    width: {
      type: String,
      default: "initial"
    },
    height: {
      type: String,
      default: "initial"
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  img {
    display: block;
  }
}
</style>

<template>
  <div class="tagline" v-bind:class="classObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tagline",
  props: {
    type: {
      default: 'main',
      type: String
    }
  },
  computed: {
    classObj: comp => ({[comp.type]: true})
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.tagline {
  margin-top: .5em;
  margin-bottom: .5em;
}
.main {
  font-size: $fs-tagline-1;
}
.sub {
  font-size: $fs-tagline-2;
}
</style>

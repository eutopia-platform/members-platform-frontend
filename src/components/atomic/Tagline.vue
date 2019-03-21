<template>
  <TextBase class="tagline" v-bind:class="classObj">
    <slot></slot>
  </TextBase>
</template>

<script>
import TextBase from './TextBase.vue'

export default {
  name: "Tagline",
  extends: TextBase,
  components: {
    TextBase
  },
  props: {
    type: {
      default: 'main',
      type: String
    }
  },
  computed: {
    classObj: comp => Object.assign({
      main: comp.type === 'main',
      sub: comp.type === 'sub'
    }, comp.colorClass)
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

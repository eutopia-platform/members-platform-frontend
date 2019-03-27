<template>
  <div class="header" v-bind:class="classObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    type: String
  },
  computed: {
    classObj: comp => ({[comp.type]: true})
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/text.scss";

.header {
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  margin-top: .5em;
  margin-bottom: .5em;
  display: inline-block;

  &::after {
    content: "\A";
    white-space: pre;
    word-wrap: break-word;
  }

  img {
    height: 1.5em;
    transform: translateY(.25em);
    margin-right: .5em;
    display: inline-block;
  }
}

.primary {
  font-size: $fs-header-1;
}

.secondary {
  font-size: $fs-header-2;
}

.tertiary {
  font-size: $fs-header-3;
}

.quaternary {
  font-size: $fs-header-4;
}
</style>

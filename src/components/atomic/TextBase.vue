<template>
  <div class="text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextBase",
  props: {
    color: {
      default: "primary",
      type: String
    }
  },
  computed: {
    colorClass: comp => ({['color-' + comp.color]: true})
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.text {
  display: inline-block;
}

.color-primary {
  color: $c-text-primary;
}

.color-secondary {
  color: $c-text-secondary;
}

.color-accent {
  color: $c-text-accent;
}
</style>

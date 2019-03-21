<template>
  <div class="pararaph" v-bind:class="{
    'color-primary': this.color === 'primary',
    'color-secondary': this.color === 'secondary',
    'color-accent': this.color === 'accent'
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    color: {
      default: "primary",
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/text.scss";
@import "../sharedStyles/colors.scss";

.paragraph {
  font-size: $fs-base;
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

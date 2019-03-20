<template>
  <div class="tagline" v-bind:class="{
      'main': this.type === 'main',
      'sub': this.type === 'sub',

      'color-primary': this.color === 'primary',
      'color-secondary': this.color === 'secondary'
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tagline",
  props: {
    type: {
      default: 'main',
      type: String,
      color: {
        default: "primary",
        type: String
      }
    }
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

.color-primary {
  color: $c-text-primary;
}

.color-secondary {
  color: $c-text-secondary;
}
</style>

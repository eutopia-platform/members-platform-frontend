<template>
  <div class="header" v-bind:class=" {
    'header-primary': this.type === 'primary',
    'header-secondary': this.type === 'secondary',
    'header-tertiary': this.type === 'tertiary',
    'header-quaternary': this.type === 'quarternary',

    'text-primary': !this.color || this.color === 'primary',
    'text-secondary': this.color && this.color === 'secondary'
    } ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    type: String,
    color: String
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

  img {
    height: 1.5em;
    transform: translateY(.25em);
    margin-right: .5em;
    display: inline-block;
  }
}

.header-primary {
  font-size: $fs-header-1;
}

.header-secondary {
  font-size: $fs-header-2;
}

.header-tertiary {
  font-size: $fs-header-3;
}

.header-quaternary {
  font-size: $fs-header-4;
}

.text-primary {
  color: $c-text-primary;
}

.text-secondary {
  color: $c-text-secondary;
}

</style>

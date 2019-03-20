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

.header {
  padding: 0;
  font-size: 1rem;

  img {
    height: 1.5em;
    transform: translateY(.25em);
    margin-right: .5em;
    display: inline-block;
  }
}

.header-primary {
  font-size: 2.9em;
}

.header-secondary {
  font-size: 1.7em;
}

.header-tertiary {
  font-size: 1.2em;
}

.header-quaternary {
  font-size: 1em;
}

.text-primary {
  color: $c-text-primary;
}

.text-secondary {
  color: $c-text-secondary;
}

</style>

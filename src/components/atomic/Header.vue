<template>
  <div class="header" v-bind:class=" {
    'header-primary': this.type === 'primary',
    'header-secondary': this.type === 'secondary',
    'header-tertiary': this.type === 'tertiary',
    'header-quaternary': this.type === 'quarternary'
    } ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    type: String
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

</style>

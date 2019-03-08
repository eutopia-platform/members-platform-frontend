<template>
  <div class="header" v-bind:class=" { 'header-primary': this.type === 'primary', 'header-secondary': this.type === 'secondary' } ">
    <slot></slot>
  </div>
</template>

<script>
const Header = {
  name: "Header",
  props: {
    type: String
  }
};

export default Header;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.header {
  padding: 0;
}

.header-primary {
  font-size: 2.9em;
}

.header-secondary {
  font-size: 1.7em;
}

</style>

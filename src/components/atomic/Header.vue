<template>
  <div class="header" v-bind:class=" { 'header-primary': this.type === 'primary' } ">
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

.header-primary {
  font-size: 2.2em;
}

</style>

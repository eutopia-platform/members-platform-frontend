<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
const Header = {
  name: "Header"
};

export default Header;
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  padding: 1.5rem;

  box-shadow: 0 0 4px #444444;

  .left {
    grid-row-start: 1;
    grid-column-start: 1;
  }

  .right {
    grid-row-start: 1;
    grid-column-start: 2;
    text-align: right;
  }
}
</style>

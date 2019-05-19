<template>
  <Menu top navigation class="mainnav" :class="theme">
    <Item>
      <Brand :nologo="theme === 'blue'" :white="theme === 'blue'"></Brand>
    </Item>
    <Item text="Workflow" link="/workflow" align="right"></Item>
    <Item text="Toolkits" link="/toolkits" align="right"></Item>
    <Item text="Start Now" align="right"></Item>
  </Menu>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Menu from '/components/molecular/Menu'
import Item from '/components/molecular/menu/Item'
import Brand from '/components/molecular/Brand'

export default new Component({
  name: 'Mainnav',
  components: {
    Menu,
    Item,
    Brand,
  },
  computed: {
    theme() {
      return this.$route.path === '/' ? 'white' : 'blue'
    },
  },
})
</script>

<style lang="scss" scoped>
.mainnav {
  .brand {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
}

.blue {
  background-color: #6bc1ff;
  color: white;
}

.white {
  background-color: white;
  color: initial;
}
</style>

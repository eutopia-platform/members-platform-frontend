<template>
  <Menu top navigation :class="theme">
    <Item>
      <Brand :nologo="theme === 'blue'" :white="theme === 'blue'"></Brand>
    </Item>
    <Item text="Workflow" align="right"></Item>
    <Item text="Toolkits" align="right"></Item>
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
  data: {
    theme: 'white',
  },
})
</script>

<style lang="scss" scoped>
.mainnav {
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

<template>
  <Menu top :class="getClass">
    <Item algin="right">
      <Icon name="person" recolor></Icon>
    </Item>
    <Item text="Toolkit" align="center"></Item>
    <Item align="right">
      <Icon name="chat" recolor></Icon>
    </Item>
    <Item algin="right">
      <Button>share</Button>
    </Item>
    <Item align="right">
      <Icon name="info" recolor></Icon>
    </Item>
  </Menu>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Menu from '/components/molecular/Menu'
import Item from '/components/molecular/menu/Item'

export default new Component({
  name: 'TitleBar',
  components: {
    Menu,
    Item,
  },
})
</script>

<style lang="scss" scoped>
.title-bar {
  .item {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    * {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
}
</style>

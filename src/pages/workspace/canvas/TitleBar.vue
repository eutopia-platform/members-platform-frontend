<template>
  <Menu top :class="getClass"></Menu>
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

<style lang="scss" scoped></style>

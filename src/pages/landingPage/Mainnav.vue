<template>
  <Menu top navigation class="mainnav" :class="theme">
    <Item>
      <Brand :nologo="theme === 'blue'" :white="theme === 'blue'"></Brand>
    </Item>
    <Item text="Workflow" link="/workflow" align="right"></Item>
    <Item text="Toolkits" link="/toolkits" align="right"></Item>
    <Item>
      <Button @click="$router.push('/login')">Login</Button>
    </Item>
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
    lastScrollPos: 0,
    hidden: false,
  },
  computed: {
    theme() {
      return this.$route.path === '/' ? 'white' : 'blue'
    },
  },
  methods: {
    hide() {
      this.$el.style.transform = 'translateY(-100%)'
      this.hidden = true
    },
    show() {
      this.$el.style.transform = 'none'
      this.hidden = false
    },
    onScroll() {
      const scrollPos = window.scrollY
      if (scrollPos === this.lastScrollPos) return
      if (scrollPos > this.lastScrollPos && !this.hidden) this.hide()
      else if (scrollPos < this.lastScrollPos && this.hidden) this.show()
      this.lastScrollPos = scrollPos
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.lastScrollPos = window.scrollY
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.mainnav {
  transition: transform 0.5s ease;

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
  @include colorScheme('neutral');
}
</style>

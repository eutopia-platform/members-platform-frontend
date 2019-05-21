<template>
  <div class="sidebar" :class="{ right, collapsed }">
    <Icon
      v-if="collapsable"
      class="toggle-collapse"
      :name="!collapsed ? 'chevron_right' : 'chevron_left'"
      recolor
      @click="toggleCollapse"
    ></Icon>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/component'

export default new Molecular({
  name: 'Sidebar',
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    collapsable: {
      type: Boolean,
      default: false,
    },
  },
  data: {
    collapsed: false,
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
      this.onWidthChange()
    },
    onWidthChange() {
      this.$emit(
        'changeWidth',
        this.collapsed ? '3rem' : window.innerWidth >= 1000 ? '300px' : '30vw'
      )
    },
  },
  mounted() {
    this.onWidthChange()
    window.addEventListener('resize', this.onWidthChange)
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/shadows';
@import '/components/sharedStyles/colors';

.sidebar {
  position: fixed;
  top: 0;
  width: 30vw;
  height: 100vh;
  box-sizing: border-box;
  z-index: 1000;

  @include colorScheme('neutral');
  box-shadow: $shadow-default;

  @media screen and (min-width: 1000px) {
    width: 300px;
  }

  transition: width 0.15s ease;

  .toggle-collapse {
    position: absolute;
    height: 2rem;
    bottom: 0;
    margin-bottom: 0.5rem;
  }
}

.right {
  right: 0;
}

.collapsed {
  width: 3rem;
}
</style>

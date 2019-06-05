<template>
  <li :style="style" @click="click">
    <Icon small :src="icon"></Icon>
    <Paragraph inline>
      <slot />
    </Paragraph>
  </li>
</template>

<script>
export default {
  name: 'NavigationBarItem',
  props: {
    icon: { type: String, default: '' },
    link: { type: String, default: '' },
    active: Boolean,
  },
  computed: {
    // color blue if active
    style: (self = this) =>
      self.$route.path === self.$router.match(self.link).path
        ? {
            filter:
              'brightness(0) saturate(100%) invert(41%) sepia(97%) saturate(952%) hue-rotate(175deg) brightness(100%) contrast(90%)',
          }
        : {},
  },
  methods: {
    click: function() {
      this.$emit('open', this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';

li {
  cursor: pointer;
  margin-bottom: 1rem;

  *:nth-child(2n) {
    margin-left: 1rem;
  }

  * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}
</style>

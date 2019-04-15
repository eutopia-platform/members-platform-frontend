<template>
  <li :style="style" @click="click">
    <Icon :src="icon"></Icon>
    <Paragraph>
      <slot />
    </Paragraph>
  </li>
</template>

<script>
import Icon from '/components/atomic/Icon'
import Paragraph from '/components/atomic/Paragraph'

export default {
  name: 'NavigationBarItem',
  components: {
    Icon,
    Paragraph,
  },
  props: {
    icon: String,
    link: String,
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
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  *:nth-child(2n) {
    margin-left: 1rem;
    margin-top: 0.15rem;
  }

  * {
    margin: 0;
  }
}
</style>

<template>
  <div
    :class="getClass"
    role="button"
    aria-label="Go to landing page"
    @click="onClick"
  >
    <Icon
      v-if="!nologo"
      :src="logo"
      class="logo"
      aria="Productcube's logo"
    ></Icon>
    <Header s3 inline :class="{ white }">Productcube</Header>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

export default new Molecular({
  name: 'Brand',
  types: ['default', 'nologo'],
  computed: {
    logo: () => require('/../data/img/ui/logo.svg'),
  },
  methods: {
    onClick: function() {
      this.$router.push('/')
    },
  },
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.brand {
  @include colorScheme('surface');
  width: 11.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  z-index: 200;
  user-select: none;
  background-color: transparent;

  .logo {
    height: 100%;
  }
}

.white {
  color: white;
}
</style>

<template>
  <div
    :class="getClass"
    role="button"
    aria-label="Go to landing page"
    @click="onClick"
  >
    <Icon :src="logo" class="logo" aria="Productcube's logo"></Icon>
    <Header tertiary>
      Productcube
    </Header>
  </div>
</template>

<script>
import Molecular from '../sharedScripts/molecular'

export default new Molecular({
  name: 'Brand',
  computed: {
    logo: () => require('/../data/img/ui/logo.svg'),
  },
  methods: {
    onClick: function() {
      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.brand {
  @include colorScheme('neutral');
  width: 11.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  z-index: 200;

  .logo {
    height: 100%;
  }
}
</style>

<template>
  <div :class="getClass" @click="onClick">
    <Icon :src="logo" class="logo"></Icon>
    <Header tertiary>
      Productcube
    </Header>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Icon from '/components/atomic/Icon'
import Header from '/components/atomic/Header'

export default new Molecular({
  name: 'Brand',
  components: {
    Header,
    Icon,
  },
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

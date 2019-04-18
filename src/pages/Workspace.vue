<template>
  <div class="workspace">
    <Overlay v-if="showOverlay"></Overlay>
    <Navbar></Navbar>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import Overlay from './workspace/Overlay'
import Navbar from './workspace/NavigationBar'
import Dashboard from './workspace/Dashboard'
import Settings from './workspace/Settings'
import gql from 'graphql-tag'

export default {
  name: 'Workspace',
  components: {
    Overlay,
    Navbar,
    Dashboard,
    Settings,
  },
  apollo: {
    user: gql`{user}`
  },
  data: function() {
    return {
      showOverlay:
        process.env.NODE_ENV === 'production' &&
        !(this.$route.query.withoutOverlay === null),
      user: ''
    }
  },
  computed: {
    activePage: () => Dashboard,
  },
  created: function() {
    if (!localStorage.getItem('sessionToken'))
      this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/components/sharedStyles/colors.scss';

.workspace {
  .page {
    @include colorScheme('secondary');
    width: 70vw;
    margin-left: 30vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;

    @media screen and (min-width: 1000px) {
      margin-left: 300px;
      width: calc(100vw - 300px);
    }
  }
}
</style>

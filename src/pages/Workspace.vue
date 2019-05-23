<template>
  <div class="workspace">
    <Navbar @changeWidth="updateSidebarWidth"></Navbar>
    <RouterView ref="page" class="page" :style="contentPos" :offset-left="sidebarWidth"></RouterView>
  </div>
</template>

<script>
import Navbar from './workspace/NavigationBar'
import Dashboard from './workspace/Dashboard'
import gql from 'graphql-tag'

export default {
  name: 'Workspace',
  components: {
    Navbar,
  },
  apollo: {
    user: {
      query: gql`
        {
          user {
            name
            callname
            email
            id
          }
        }
      `,
      fetchPolicy: 'network-only',
    },
  },
  data() {
    return {
      sidebarWidth: 0,
    }
  },
  computed: {
    activePage: () => Dashboard,
    contentPos() {
      return {
        'margin-left': this.sidebarWidth,
        width: `calc(100% - ${this.sidebarWidth})`,
      }
    },
  },
  created: function() {
    if (!localStorage.getItem('sessionToken')) this.$router.push('/login')
  },
  methods: {
    updateSidebarWidth(width) {
      this.sidebarWidth = width
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/components/sharedStyles/colors.scss';

.workspace {
  .page {
    @include colorScheme('secondary');
    min-height: 100vh;
    box-sizing: border-box;
    padding: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>

<template>
  <div class="workspace">
    <Navbar></Navbar>
    <RouterView class="page"></RouterView>
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
  computed: {
    activePage: () => Dashboard,
  },
  created: function() {
    if (!localStorage.getItem('sessionToken')) this.$router.push('/login')
  },
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

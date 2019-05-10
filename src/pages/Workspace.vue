<template>
  <div class="workspace">
    <Overlay v-if="showOverlay"></Overlay>
    <Navbar></Navbar>
    <RouterView class="page"></RouterView>
  </div>
</template>

<script>
import Overlay from './workspace/Overlay'
import Navbar from './workspace/NavigationBar'
import Dashboard from './workspace/Dashboard'
import gql from 'graphql-tag'

export default {
  name: 'Workspace',
  components: {
    Overlay,
    Navbar,
  },
  apollo: {
    user: {
      query: gql`
        {
          user {
            isLoggedIn
            name
            callname
            email
            id
          }
        }
      `,
    },
  },
  data: function() {
    return {
      showOverlay:
        process.env.NODE_ENV === 'production' &&
        !(this.$route.query.withoutOverlay === null),
    }
  },
  computed: {
    activePage: () => Dashboard,
  },
  watch: {
    user: function(user) {
      if (!user.isLoggedIn) this.$router.push('/login')
    },
  },
  created: function() {
    if (!localStorage.getItem('sessionToken')) this.$router.push('/login')
    this.prepareChache()
  },
  methods: {
    initCacheQuery: function(query, data, client = 'user') {
      try {
        this.$apollo.provider.clients[client].readQuery({ query })
      } catch (e) {
        if (e.name !== 'Invariant Violation') throw e
        this.$apollo.provider.clients[client].writeQuery({
          query,
          data,
        })
      }
    },
    prepareChache: function() {
      this.initCacheQuery(
        gql`
          {
            user {
              name
              callname
              email
              id
            }
          }
        `,
        {
          user: {
            name: '',
            callname: '',
            email: '',
            id: '',
            __typename: 'User',
          },
        }
      )
    },
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

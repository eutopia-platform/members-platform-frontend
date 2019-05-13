<template>
  <div :class="getClass">
    <Card class="content">
      <Paragraph>You have not been invited to this workspace.</Paragraph>
      <Button @click="logout">switch account</Button>
      <Break />
      <Small>
        currently logged in as:
        <Break />
        {{ user.name }} ({{ user.email }})
      </Small>
    </Card>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'InviteError',
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
      result({ data: { user } }) {
        if (!user.isLoggedIn) this.openLogin()
      },
      fetchPolicy: 'network-only',
    },
  },
  data: {
    user: {
      isLoggedIn: true,
      name: '',
      email: '',
    },
  },
  methods: {
    logout: function() {
      this.$apollo.provider.clients.auth
        .mutate({
          mutation: gql`
          mutation {
            logout(token: "${localStorage.getItem('sessionToken')}")
          }
        `,
        })
        .then(() => {
          localStorage.removeItem('sessionToken')
          localStorage.removeItem('workspace')
          this.$apollo.provider.clients.user.cache.writeData({
            data: {
              user: {
                name: '',
                callname: '',
                email: '',
                id: '',
                __typename: 'User',
              },
            },
          })
          this.$router.push({
            name: 'login',
            params: { redirect: this.$route.path },
          })
        })
    },
  },
})
</script>

<style lang="scss" scoped>
.invite-error {
  width: 100vw;
  height: 100vh;

  .content {
    width: 25rem;
    max-width: 100vw;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }
}
</style>

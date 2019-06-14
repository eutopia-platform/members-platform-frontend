<template>
  <div :class="getClass">
    <Card class="content">
      <Paragraph>You have not been invited to this workspace.</Paragraph>
      <Button outlined @click="logout">switch account</Button>
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
import Component from '~/scripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'InviteError',
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
      error(err) {
        if (
          err.message.replace('GraphQL error:', '').trim() === 'NOT_LOGGED_IN'
        ) {
          this.openLogin()
          return true
        } else throw Error(err)
      },
      fetchPolicy: 'network-only',
    },
  },
  data: () => ({
    user: {
      name: '',
      email: '',
    },
  }),
  methods: {
    logout() {
      this.$router.push({
        name: 'login',
        params: { redirect: this.$route.path },
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

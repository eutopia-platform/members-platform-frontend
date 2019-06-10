<template>
  <div :class="getClass">
    <Paragraph>
      You have been invited to join the
      <b>{{ space }}</b>
      workspace.
    </Paragraph>
    <div class="button-wrap">
      <Button @click="decline">decline</Button>
      <Button @click="accept">accept</Button>
    </div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'Invitation',
  props: {
    space: {
      type: String,
      required: true,
    },
  },
  methods: {
    decline() {
      this.$apollo
        .mutate({
          client: 'work',
          mutation: gql`
            mutation declineInvite($space: String!) {
              declineInvitation(workspace: $space)
            }
          `,
          variables: { space: this.space },
        })
        .then(() => void this.done())
    },
    accept() {
      this.$apollo
        .mutate({
          client: 'work',
          mutation: gql`
            mutation acceptInvite($space: String!) {
              acceptInvitation(workspace: $space) {
                name
              }
            }
          `,
          variables: { space: this.space },
        })
        .then(() => {
          this.done()
          this.$router.push(`/space/${this.name}`)
        })
    },
    done() {
      const query = gql`
        {
          user {
            id
            name
            callname
            email
            joined
            invitations
          }
        }
      `
      const data = this.$apollo.provider.defaultClient.readQuery({
        query,
      })
      data.user.invitations = data.user.invitations.filter(
        invitation => invitation !== this.space
      )
      this.$apollo.provider.defaultClient.writeQuery({ query, data })
    },
  },
})
</script>

<style lang="scss" scoped>
.invitation {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-right: 2rem;
  padding-left: 2rem;
  height: 5rem;
  align-items: center;

  * {
    margin: 0;
  }
  .button-wrap {
    margin-left: 2rem;
    display: flex;
    .button {
      margin-left: 1rem;
    }
  }
}
</style>

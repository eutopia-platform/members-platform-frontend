<template>
  <form>
    <Input v-model="email" blend placeholder="email" />
    <Button @click="onSubmit">invite</Button>
  </form>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'
import CubeError from '/error'

export default new Component({
  name: 'InviteForm',
  data: {
    email: '',
  },
  methods: {
    onSubmit() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation inviteMember($workspace: String!, $email: String!) {
              invite(workspace: $workspace, email: $email)
            }
          `,
          variables: {
            email: this.email,
            workspace: localStorage.getItem('workspace'),
          },
          client: 'work',
        })
        .catch(err => {
          switch (err.message.replace('GraphQL error:', '').trim()) {
            case 'ALREADY_INVITED':
              this.$emit('error', new CubeError('already invited to workspace'))
              break
            case 'INVALID_EMAIL':
              this.$emit('error', new CubeError('invalid email'))
              break
            case 'ALREADY_MEMBER':
              this.$emit('error', new CubeError('already member of workspace'))
              break
            default:
              this.$emit('error', new CubeError())
              throw err
          }
        })
    },
  },
})
</script>

<template>
  <form>
    <ActionInput
      button="invite"
      type="email"
      label="email"
      :input-clear="true"
      @submit="onSubmit"
    ></ActionInput>
  </form>
</template>

<script>
import Component from '~/scripts/component'
import ActionInput from '~/components/molecular/ActionInput'
import gql from 'graphql-tag'
import { displayError } from '~/error'
import { isEmail } from '~/scripts/validate'

export default new Component({
  name: 'InviteForm',
  components: {
    ActionInput,
  },
  methods: {
    onSubmit(e) {
      if (!isEmail(e)) {
        displayError('invalid email')
        return
      }
      this.$apollo
        .mutate({
          mutation: gql`
            mutation inviteMember($workspace: String!, $email: String!) {
              invite(workspace: $workspace, email: $email)
            }
          `,
          variables: {
            email: e,
            workspace: localStorage.getItem('workspace'),
          },
          client: 'work',
        })
        .catch(err => {
          switch (err.message.replace('GraphQL error:', '').trim()) {
            case 'ALREADY_INVITED':
              displayError('already invited')
              break
            case 'INVALID_EMAIL':
              displayError('invalid email')
              break
            case 'ALREADY_MEMBER':
              displayError('already member')
              break
            default:
              displayError()
              throw err
          }
        })
    },
  },
})
</script>

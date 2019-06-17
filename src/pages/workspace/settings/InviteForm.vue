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
import { CubeError } from '~/error'
import { isEmail } from '~/scripts/validate'

export default new Component({
  name: 'InviteForm',
  components: {
    ActionInput,
  },
  methods: {
    onSubmit(e) {
      if (!isEmail(e)) throw new CubeError('invalid email')
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

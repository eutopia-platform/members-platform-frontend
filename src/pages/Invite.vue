<template>
  <Component :is="screen" :space="space"></Component>
</template>

<script>
import Component from '~/scripts/component'
import LoadingScreen from '~/pages/LoadingScreen'
import InviteError from './invite/InviteError'
import InviteInfo from './invite/InviteInfo'
import gql from 'graphql-tag'
import { CubeError } from '~/error'

export default new Component({
  name: 'Invite',
  apollo: {
    $client: 'work',
    workspace: {
      query: gql`
        query workspace($link: String!) {
          workspace: inviteSpaceName(link: $link)
        }
      `,
      variables() {
        return {
          link: this.$route.params.code,
        }
      },
      error(err) {
        if (
          err.message.replace('GraphQL error:', '').trim() === 'WORKSPACE_GONE'
        ) {
          this.$emit(
            'error',
            new CubeError("this workspace doesn't seem to exist")
          )
          return true
        }
        this.screen = 'InviteError'
        return true
      },
      result({ data: { workspace } }) {
        if (!workspace) return
        this.space = workspace
        this.screen = 'InviteInfo'
      },
    },
  },
  data: () => ({
    screen: 'LoadingScreen',
    space: '',
  }),
  components: {
    LoadingScreen,
    InviteError,
    InviteInfo,
  },
})
</script>

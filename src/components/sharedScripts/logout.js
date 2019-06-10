import { assert } from './debug'
import VueApollo from 'vue-apollo'
import gql from 'graphql-tag'

export default async apolloProvider => {
  assert(
    () => apolloProvider instanceof VueApollo,
    'logout requires access to apollo provider'
  )

  if (localStorage.getItem('sessionToken'))
    await apolloProvider.clients.auth.mutate({
      mutation: gql`
        mutation logoutUser($sessionToken: ID!) {
          logout(sessionToken: $sessionToken)
        }
      `,
      variables: {
        sessionToken: localStorage.getItem('sessionToken'),
      },
    })

  localStorage.removeItem('sessionToken')
  localStorage.removeItem('workspace')

  apolloProvider.clients.user.cache.writeData({
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
}

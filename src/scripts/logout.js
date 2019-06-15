import { assert } from './debug'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'
import logoutMutation from '~gql/logout'
import userQuery from '~gql/user'

export default async ({ $apollo: apollo, $router: router }) => {
  assert(
    () => apollo.provider instanceof VueApollo && router instanceof VueRouter,
    'logout requires access to apollo & router'
  )

  if ('sessionToken' in localStorage) {
    await apollo.mutate({
      client: 'auth',
      mutation: logoutMutation,
      variables: {
        sessionToken: localStorage.getItem('sessionToken'),
      },
      update(store) {
        store.writeQuery({
          query: userQuery,
          data: {
            user: {
              id: null,
              name: null,
              callname: null,
              email: null,
              joined: null,
              __typename: 'User',
            },
          },
        })
      },
    })
    localStorage.removeItem('sessionToken')
  }

  if ('workspace' in localStorage) localStorage.removeItem('workspace')

  if (router.currentRoute.path.replace('/', '') !== 'login')
    router.push('/login')
}

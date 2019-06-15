import cacheDefault from '~/cacheDefault'
import router from '~/router'

export class CubeError extends Error {
  constructor(error) {
    super(typeof error === 'string' ? error : error.message)
    this.code = this.message.replace('GraphQL error:', '').trim()
  }

  get notLoggedIn() {
    return this.code === 'NOT_LOGGED_IN'
  }
}

export default {
  methods: {
    showError(msg = 'Error') {
      this.$root.$children[0].handleError(new CubeError(msg))
    },
  },
}

export const handleGraphError = ({
  graphQLErrors: client,
  operation,
  response,
}) => {
  if (client) {
    client.forEach(err => {
      if (err.extensions.code === 'UNAUTHENTICATED') {
        if (operation.operationName in cacheDefault) {
          response.data = cacheDefault[operation.operationName]
          response.errors = null
        }
        if (operation.operationName === 'currentUser') {
          if (router.currentRoute.name !== 'login') router.push('/login')
        }
      }
    })
  }
}

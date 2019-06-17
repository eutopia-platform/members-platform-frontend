import cacheDefault from '~/cacheDefault'
import router from '~/router'
import Vue from 'vue'

export class CubeError extends Error {
  constructor(error) {
    super(typeof error === 'string' ? error : error.message)
    this.code = this.message.replace('GraphQL error:', '').trim()
  }

  get notLoggedIn() {
    return this.code === 'NOT_LOGGED_IN'
  }
}

export const displayError = msg => {
  document.body.appendChild(
    new (Vue.extend(Vue.component('Alert')))({
      propsData: { ...(msg && msg.length && { msg }) },
    }).$mount().$el
  )
}

export const handleGraphError = ({
  graphQLErrors: client,
  operation,
  response,
}) => {
  if (client) {
    client.forEach(err => {
      if (!err.extensions) return
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          if (operation.operationName in cacheDefault) {
            response.data = cacheDefault[operation.operationName]
            response.errors = null
          }
          if (operation.operationName === 'currentUser') {
            if (router.currentRoute.name !== 'login') router.push('/login')
          }
          break
        case 'BAD_USER_INPUT':
          break
        case 'INTERNAL_SERVER_ERROR':
          displayError('something went wrong')
          break
        default:
          break
      }
    })
  }
}

import cacheDefault from '~/cacheDefault'
import Vue from 'vue'
import store from '~/store'

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
          if (operation.operationName === 'currentUser')
            store.dispatch('logout')
          break
        case 'BAD_USER_INPUT':
          if (operation.operationName === 'login') {
            displayError('wrong email or password')
            response.errors = null
          }
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

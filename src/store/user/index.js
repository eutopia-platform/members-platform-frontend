import * as types from './mutation-types'
import router from '~/router'
import currentUserQuery from '~/gql/user'
import loginMutation from '~/gql/login'
import logoutMutation from '~/gql/logout'
import api from '~/connections'

export default {
  namespaced: true,
  state: {
    loggedIn: !!localStorage.getItem('sessionToken'),
    sessionToken: '',
    loading: false,
    info: {
      id: '',
      name: '',
      callname: '',
      email: '',
      joined: '',
      invitations: [],
      role: '',
    },
  },
  mutations: {
    [types.SET_INFO](state, payload) {
      Object.assign(state.info, payload)
    },
    [types.SET_LOADING](state, value) {
      state.loading = value
    },
    [types.SET_LOGGED_IN](state, value) {
      state.loggedIn = value
    },
    [types.SET_SESSION_TOKEN](state, value) {
      state.sessionToken = value
    },
  },
  actions: {
    async loadUser({ commit }) {
      commit(types.SET_LOADING, true)
      const {
        data: { user },
      } = await api.user.query({ query: currentUserQuery })
      commit(types.SET_INFO, user)
      commit(types.SET_LOADING, false)
    },

    async login({ commit, dispatch }, credentials) {
      if (localStorage.getItem('sessionToken'))
        await dispatch('logout', null, { root: true })
      const {
        data: { login: token },
      } = await api.auth.mutate({
        mutation: loginMutation,
        variables: credentials,
        fetchPolicy: 'no-cache',
      })
      localStorage.setItem('sessionToken', token)
      commit(types.SET_SESSION_TOKEN, token)
      commit(types.SET_LOGGED_IN, true)
      dispatch('loadUser')
    },

    logout: {
      root: true,
      handler: async ({ dispatch }) => {
        if ('sessionToken' in localStorage)
          await api.auth.mutate({
            mutation: logoutMutation,
            variables: {
              sessionToken: localStorage.getItem('sessionToken'),
            },
            errorPolicy: 'all',
            fetchPolicy: 'no-cache',
          })
        localStorage.removeItem('sessionToken')
        localStorage.removeItem('workspace')
        dispatch('tabLogout')
      },
    },

    async tabLogout({ commit }) {
      commit(types.SET_LOGGED_IN, false)
      commit(types.SET_INFO, {
        id: '',
        name: '',
        callname: '',
        email: '',
        joined: '',
        invitations: [],
        role: '',
      })
      for (const client in api)
        if (api.hasOwnProperty(client) && client !== 'defaultClient')
          api[client].store.reset()
      if (router.currentRoute.path.replace('/', '') !== 'login')
        router.push('/login')
    },
  },
}

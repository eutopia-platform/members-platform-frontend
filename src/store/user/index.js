import * as types from './mutation-types'
import currentUserQuery from '~/gql/user'
import loginMutation from '~/gql/login'
import api from '~/connections'

export default {
  namespaced: true,
  state: {
    loggedIn: false,
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
      const {
        data: { login: token },
      } = await api.auth.mutate({
        mutation: loginMutation,
        variables: credentials,
      })
      localStorage.setItem('sessionToken', token)
      commit(types.SET_LOGGED_IN, true)
      dispatch('loadUser')
    },
  },
}

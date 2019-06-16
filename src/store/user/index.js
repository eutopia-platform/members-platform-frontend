import * as types from './mutation-types'
import currentUserQuery from '~/gql/user'
import api from '~/connections'

export default {
  namespaced: true,
  state: {
    loading: true,
    info: {
      id: '',
      name: '',
      callname: '',
      email: '',
      joined: '',
    },
  },
  mutations: {
    [types.SET_INFO](state, payload) {
      Object.assign(state.info, payload)
    },
  },
  actions: {
    async loadUser({ commit }) {
      const {
        data: { user },
      } = await api.user.query({ query: currentUserQuery })
      commit(types.SET_INFO, user)
    },
  },
}

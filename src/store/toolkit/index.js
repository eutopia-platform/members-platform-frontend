import * as types from './mutation-types'
import queryToolkits from '~/gql/toolkitList'
import api from '~/connections'

export default {
  namespaced: true,
  state: {
    loading: false,
    toolkits: [],
  },
  mutations: {
    [types.ADD_TOOLKITS](state, payload) {
      state.toolkits = [
        ...state.toolkits,
        ...payload
          .map(kit => Object.assign({}, kit))
          .filter(search => !state.toolkits.find(kit => kit.id === search.id)),
      ]
    },
    [types.SET_LOADING](state, value) {
      state.loading = value
    },
  },
  actions: {
    async fetchToolkits({ commit }) {
      commit(types.SET_LOADING, true)
      const {
        data: { toolkits },
      } = await api.tool.query({ query: queryToolkits })
      commit(types.ADD_TOOLKITS, toolkits)
      commit(types.SET_LOADING, false)
    },
  },
}

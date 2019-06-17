import * as types from './mutation-types'
import queryToolkits from '~/gql/toolkitList'
import queryToolkit from '~/gql/toolkit'
import api from '~/connections'

export default {
  namespaced: true,
  state: {
    loading: false,
    toolkits: [],
    currentKit: null,
  },
  getters: {
    getKitById: state => id => state.toolkits.find(kit => kit.id === id),
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
    [types.UPDATE_TOOLKIT](state, payload) {
      const kit = state.toolkits.find(kit => kit.id === payload.id)
      if (!kit) state.toolkits.push(Object.assign({}, payload))
      else Object.assign(kit, payload)
    },
    [types.SET_LOADING](state, value) {
      state.loading = value
    },
    [types.SET_CURRENT_KIT](state, ref) {
      state.currentKit = ref
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
    async fetchToolkit({ commit }, id) {
      const {
        data: { toolkit },
      } = await api.tool.query({ query: queryToolkit, variables: { id } })
      commit(types.UPDATE_TOOLKIT, toolkit)
    },
  },
}

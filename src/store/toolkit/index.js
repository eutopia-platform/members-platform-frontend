import * as types from './mutation-types'

export default {
  namespaced: true,
  state: {
    toolkits: [],
  },
  mutations: {
    [types.ADD_TOOLKIT](state, payload) {
      this.toolkits.push(Object.assign({}, payload))
    },
  },
  actions: {},
}

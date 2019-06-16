import * as types from './mutation-types'

export default {
  namespaced: true,
  state: {
    workspace: {
      name: '',
    },
  },
  mutations: {
    [types.SET_WORKSPACE](state, workspace) {
      Object.assign(state.workspace, workspace)
    },
  },
  actions: {},
}

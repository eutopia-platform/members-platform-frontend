import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import * as types from './mutation-types'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
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
})

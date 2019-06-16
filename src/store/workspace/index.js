import * as types from './mutation-types'
import router from '~/router'
import api from '~/connections'
import queryWorkspaces from '~/gql/workspaces'
import queryWorkspaceByName from '~/gql/workspace'

export default {
  namespaced: true,
  state: {
    loading: true,
    access: false,
    lastWorkspace: null,
    workspace: {
      name: '',
    },
  },
  mutations: {
    [types.SET_WORKSPACE](state, workspace) {
      Object.assign(state.workspace, workspace)
    },
    [types.SET_LAST_WORKSPACE](state, name) {
      state.lastWorkspace = name
    },
    [types.SET_ACCESS](state, value) {
      state.access = value
    },
  },
  actions: {
    async loadWorkspace({ state, dispatch }) {
      state.loading = true

      let target = router.currentRoute.params.workspace
      if (!target) {
        if (!state.lastWorkspace) await dispatch('fetchLastWorkspace')
        target = state.lastWorkspace
        router.replace(`/space/${target}`)
      }
      await dispatch('loadWorkspaceByName', target)

      state.loading = false
    },

    async fetchLastWorkspace({ commit }) {
      await api.work
        .query({ query: queryWorkspaces })
        .then(({ data: { workspaces: [{ name }] } }) => {
          commit(types.SET_LAST_WORKSPACE, name)
        })
    },

    async loadWorkspaceByName({ commit }, name) {
      await api.work
        .query({ query: queryWorkspaceByName, variables: { name } })
        .then(({ data: { workspace } }) => {
          commit(types.SET_WORKSPACE, workspace)
          commit(types.SET_ACCESS, true)
        })
        .catch(err => {
          commit(types.SET_ACCESS, false)
          throw err
        })
    },
  },
}

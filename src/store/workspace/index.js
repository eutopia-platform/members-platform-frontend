import * as types from './mutation-types'
import router from '~/router'
import api from '~/connections'
import queryWorkspaces from '~/gql/workspaces'
import queryWorkspaceByName from '~/gql/workspace'
import queryWorkspaceMembers from '~/gql/workspaceMembers'

export default {
  namespaced: true,
  state: {
    loading: true,
    access: false,
    lastWorkspace: null,
    workspace: {
      name: '',
      created: '',
      members: [],
    },
    workspaces: [],
  },
  mutations: {
    [types.SET_WORKSPACE](state, payload) {
      state.workspace = Object.assign({}, payload)
    },
    [types.UPDATE_WORKSPACE](state, payload) {
      Object.assign(state.workspace, payload)
    },
    [types.SET_LAST_WORKSPACE](state, name) {
      state.lastWorkspace = name
      localStorage.setItem('workspace', name)
    },
    [types.SET_ACCESS](state, value) {
      state.access = value
    },
    [types.SET_WORKSPACES](state, payload) {
      state.workspaces = Object.assign([], payload)
    },
    [types.SET_LOADING](state, value) {
      state.loading = value
    },
  },
  actions: {
    async loadWorkspace({ state, commit, dispatch }) {
      commit(types.SET_LOADING, true)

      let target = router.currentRoute.params.workspace
      if (!target) {
        if (!state.lastWorkspace) await dispatch('fetchLastWorkspace')
        target = state.lastWorkspace
        router.replace(`/space/${target}`)
      }
      await dispatch('loadWorkspaceByName', target)

      commit(types.SET_LOADING, false)
    },

    async fetchLastWorkspace({ commit }) {
      const last =
        localStorage.getItem('workspace') ||
        (await api.work
          .query({ query: queryWorkspaces })
          .then(({ data: { workspaces: [{ name }] } }) => {
            return name
          }))
      commit(types.SET_LAST_WORKSPACE, last)
    },

    async loadWorkspaceByName({ commit }, name) {
      await api.work
        .query({ query: queryWorkspaceByName, variables: { name } })
        .then(({ data: { workspace } }) => {
          commit(types.UPDATE_WORKSPACE, workspace)
          commit(types.SET_ACCESS, true)
          commit(types.SET_LAST_WORKSPACE, name)
        })
        .catch(err => {
          commit(types.SET_ACCESS, false)
          throw err
        })
    },

    async loadUserWorkspaces({ commit }) {
      const {
        data: { workspaces },
      } = await api.work.query({ query: queryWorkspaces })
      commit(types.SET_WORKSPACES, workspaces)
    },

    async fetchMembers({ state, commit }) {
      const {
        data: { workspace },
      } = await api.work.query({
        query: queryWorkspaceMembers,
        variables: { name: state.workspace.name },
      })
      commit(types.UPDATE_WORKSPACE, workspace)
    },
  },
}

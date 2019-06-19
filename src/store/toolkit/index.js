import * as types from './mutation-types'
import queryToolkits from '~/gql/toolkitList'
import queryToolkit from '~/gql/toolkit'
import mutationCreateToolkit from '~/gql/createToolkit'
import mutationDeleteToolkit from '~/gql/deleteToolkit'
import mutationEditToolkit from '~/gql/editToolkit'
import api from '~/connections'
import Toolkit from '~/schema/toolkit'
import { displayError } from '~/error'

export default {
  namespaced: true,
  state: {
    loading: false,
    toolkits: [],
    currentKit: null,
  },
  getters: {
    getKitById: state => id => state.toolkits.find(kit => kit.id === id),
    title: state => (state.currentKit ? state.currentKit.title : ''),
    workflow: state => (state.currentKit ? state.currentKit.workflow : ''),
    learning: state => (state.currentKit ? state.currentKit.learning : ''),
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
    [types.REMOVE_TOOLKIT](state, id) {
      if (state.currentKit.id === id) state.currentKit = null
      const toolkit = state.toolkits.find(kit => kit.id === id)
      if (toolkit) state.toolkits.splice(state.toolkits.indexOf(toolkit), 1)
    },
  },
  actions: {
    async fetchToolkits({ commit }) {
      commit(types.SET_LOADING, true)
      const {
        data: { toolkits },
      } = await api.tool.query({ query: queryToolkits })
      toolkits.forEach(kit => (kit.description = decodeURI(kit.description)))
      commit(types.ADD_TOOLKITS, toolkits)
      commit(types.SET_LOADING, false)
    },

    async fetchToolkit({ commit, getters }, id) {
      const {
        data: { toolkit },
      } = await api.tool.query({ query: queryToolkit, variables: { id } })

      Object.assign(toolkit, {
        description: decodeURI(toolkit.description),
        workflow: decodeURI(toolkit.workflow),
        learning: decodeURI(toolkit.learning),
        canvas: JSON.parse(toolkit.canvas),
      })
      toolkit.canvas.boxes = toolkit.canvas.boxes.map(box => ({
        ...box,
        ...{ content: decodeURI(box.content) },
      }))

      if (toolkit.canvas.meta.width)
        toolkit.canvas.meta.width = parseFloat(toolkit.canvas.meta.width)
      if (toolkit.canvas.meta.height)
        toolkit.canvas.meta.height = parseFloat(toolkit.canvas.meta.height)

      commit(types.UPDATE_TOOLKIT, toolkit)
      commit(types.SET_CURRENT_KIT, getters.getKitById(toolkit.id))
    },

    async createToolkit({ commit }) {
      const {
        data: {
          createToolkit: { id, title },
        },
      } = await api.tool.mutate({
        mutation: mutationCreateToolkit,
      })
      commit(types.ADD_TOOLKITS, [{ id, title }])
    },

    async deleteToolkit({ commit }, id) {
      await api.tool.mutate({
        mutation: mutationDeleteToolkit,
        variables: { id },
      })
      commit(types.REMOVE_TOOLKIT, id)
    },

    async editToolkit({ commit }, toolkit) {
      if (!toolkit.valid) {
        displayError('invalid update')
        return
      }
      const {
        data: { editToolkit },
      } = await api.tool.mutate({
        mutation: mutationEditToolkit,
        variables: toolkit.encode(),
      })
      commit(types.UPDATE_TOOLKIT, new Toolkit(editToolkit, { decode: true }))
    },
  },
}

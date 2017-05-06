import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const types = {
  SOCKET_INIT: 'SOCKET_INIT',
  SOCKET_CONNECT: 'SOCKET_CONNECT',
  SOCKET_MESSAGE: 'SOCKET_MESSAGE',
  LIST_RESOURCE: 'LIST_RESOURCE'
}

const api = {
  async get (url) {
    return Vue.http.get(url)
      .then(r => Promise.resolve(r))
      .catch(e => Promise.reject(e))
  }
}

export default new Vuex.Store({
  state: {
    connect: false,
    message: null
  },
  getters: {
    connect: state => state.connect,
    message: state => state.message
  },
  mutations: {
    [types.SOCKET_CONNECT] (state, status) {
      state.connect = true
    },
    [types.SOCKET_MESSAGE] (state, message) {
      state.message = message
    },
    [types.LIST_RESOURCE] (state, resource) {
      state[resource.prop] = resource.body
    }
  },
  actions: {
    async listResource ({commit}, config) {
      return api.get(config.url)
        .then(({body}) => commit(types.LIST_RESOURCE, {
          body: body,
          prop: config.prop
        }))
        .catch(e => Promise.reject(e))
    }
  }
})

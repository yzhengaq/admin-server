import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    theme: 'light',
  },
  mutations: {
    setCollapsed (state) {
      state.collapsed = !state.collapsed
    },
  },
  actions: {

  },
  modules: {
  },
})

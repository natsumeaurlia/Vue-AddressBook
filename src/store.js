import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  actions: {
    toggleSideMenu(context)
    {
      context.commit('toggleSideMenu');
    }
  },
  mutations: {
    toggleSideMenu(state)
    {
      state.drawer = !state.drawer;
    }
  }
})

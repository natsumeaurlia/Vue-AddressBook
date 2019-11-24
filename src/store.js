import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: []
  },
  actions: {
    toggleSideMenu(context) {
      context.commit('toggleSideMenu');
    },
    addAddress(context, address) {
      context.commit('addAddress', address)
    }
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, address) {
      state.addresses.push(address);
    }
  }
})

// import { push } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/stores/carts'
import alert from '@/stores/alert'
import auth from '@/stores/auth'
import dialog from '@/stores/dialog'
import region from '@/stores/region'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    preveUrl: '',
  },
  getters: {
    counter: (state) => state.counter,
    prevUrl: (state) => state.prevUrl,
  },
  //  kumpulan fungsi untuk memanipulasi state atau bisa juga disebut sebagai setter
  mutations: {
    increment(state) {
      state.counter++
    },
    setPrevUrl: (state, value) => {
      state.preveUrl = value
    },
  },

  // Actions bertugas meng-commit mutations.
  // Actions mendukung operasi asynchronous.
  // memanggil fungsi mutations
  actions: {
    increment(context) {
      context.commit('increment')
    },
    setPrevUrl: ({ commit }, value) => {
      commit('setPrevUrl', value)
    },
  },
  // menampung state yang dipecah
  modules: {
    region,
    cart,
    alert,
    auth,
    dialog,
  },
})

// import { push } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/stores/carts'
import alert from '@/stores/alert'
import auth from '@/stores/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    counter: (state) => state.counter,
  },
  //  kumpulan fungsi untuk memanipulasi state atau bisa juga disebut sebagai setter
  mutations: {
    increment(state) {
      state.counter++
    },
  },

  // Actions bertugas meng-commit mutations.
  // Actions mendukung operasi asynchronous.
  // memanggil fungsi mutations
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  // menampung state yang dipecah
  modules: {
    cart,
    alert,
    auth,
  },
})

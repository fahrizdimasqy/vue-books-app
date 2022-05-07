export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    set: (state, payload) => {
      state.user = payload
    },
  },
  actions: {
    //   set data user yang login pada state user
    set: ({ commit }, payload) => {
      commit('set', payload)
    },
  },
  getters: {
    // getters user untuk mendapatkan data user pada state serta getters guest akan mengecek apakah ada data user atau tidak,  jika tidak berarti user tersebut belum login alias tamu.

    user: (state) => state.user,
    guest: (state) => Object.keys(state.user).length === 0,
  },
}

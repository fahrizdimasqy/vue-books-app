export default {
  namespaced: true,
  state: {
    carts: [],
  },

  mutations: {
    insert: (state, payload) => {
      state.carts.push({
        id: payload.id,
        title: payload.title,
        cover: payload.cover,
        price: payload.price,
        weight: payload.weight,
        quantity: 1,
      })
    },
    update: (state, payload) => {
      let idx = state.carts.indexOf(payload)
      state.carts.splice(idx, 1, {
        id: payload.id,
        title: payload.title,
        cover: payload.cover,
        price: payload.price,
        weight: payload.weight,
        quantity: payload.quantity,
      })
      if (payload.quantity <= 0) {
        state.carts.splice(idx, 1)
      }
    },
    set: (state, payload) => {
      state.carts = payload
    },
  },
  actions: {
    // mendeteksi apakah data yang diinput ada pada carts?
    add: ({ state, commit }, payload) => {
      let cartItem = state.carts.find((item) => item.id === payload.id)
      // jika tidak ada maka mutation insert dijalankan
      if (!cartItem) {
        commit('insert', payload)
      }
      // jika ada maka mutation update dijalankan
      else {
        cartItem.quantity++
        commit('update', cartItem)
      }
    },
    remove: ({ state, commit }, payload) => {
      let cartItem = state.carts.find((item) => item.id === payload.id)
      if (cartItem) {
        cartItem.item--
        commit('upadte', cartItem)
      }
    },
    set: (state, payload) => {
      state.carts = payload
    },
  },

  getters: {
    carts: (state) => state.carts,
    count: (state) => {
      return state.carts.length
    },
    totalPrice: (state) => {
      let total = 0
      state.carts.foreEach(function (cart) {
        total += cart.price * cart.quantity
      })
      return total
    },
    totalQuantity: (state) => {
      let total = 0
      state.carts.foreEach(function (cart) {
        total += cart.quantity
      })
      return total
    },
    totalWeight: (state) => {
      let total = 0
      state.carts.foreEach(function (cart) {
        total += cart.weight
      })
      return total
    },
  },
}

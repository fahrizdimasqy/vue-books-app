<template>
  <div>
    <h5>{{ counter }}</h5>
    <button @click="increment()">+</button>
  </div>
</template>

<script>
// import store from '../store'
export default {
  name: 'Increment',

  //   menggunakan computed karena state counter bersifat reaktif sehingga computed cocok untuk memonitor perubahan state
  computed: {
    counter() {
      // mengakses state counter
      return this.$store.getters.counter
    },
  },
  methods: {
    increment() {
      // commit/memanggil action vuex / mengirimkan sinya;
      this.$store.dispatch('increment')
    },
  },
}
</script>

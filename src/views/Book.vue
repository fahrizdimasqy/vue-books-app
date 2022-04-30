<template>
  <div v-if="book.slug">
    <div style="background-color: #fff4e6;" class="py-8">
      <v-img
        class="mx-auto"
        width="50%"
        :src="getImage('/books/' + book.cover)"
      ></v-img>
    </div>

    <v-card class="rounded-t-xl mt-5 px-2 pb-5" style="height: 100vh;">
      <v-card-title>{{ book.title }}</v-card-title>
      <v-card-text class="text--disabled">By: {{ book.author }}</v-card-text>
      <v-card-text class="text--disabled">
        Published: {{ book.publisher }}
      </v-card-text>
      <div class="d-flex">
        <v-card-text class="pink--text">
          Weight: {{ book.weight }} Kg
        </v-card-text>
        <v-card-text class="pink--text">Stock: {{ book.stock }}</v-card-text>
        <v-card-text class="pink--text">
          {{ book.views }}
          <v-icon color="pink">mdi-eye</v-icon>
        </v-card-text>
      </div>
      <v-card-subtitle>
        {{ book.description }}
      </v-card-subtitle>
      <v-card-subtitle>
        Category
        <v-chip v-for="category in book.categories" :key="category.id">
          {{ category.name }}
        </v-chip>
      </v-card-subtitle>
      <v-card-subtitle class="pink--text font-weight-black">
        Rp. {{ book.price.toLocaleString('id-ID') }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn depressed block color="pink" class="white--text" @click="buy">
          Buy
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    book: {},
  }),
  created() {
    this.go()
  },
  computed: {
    // dengan memaping state tersebut dengan menggunakan mapGetters
    // bisa kita akses layaknya properti data
    //  this.carts.

    ...mapGetters({
      carts: 'carts',
    }),
  },
  methods: {
    // setProducts(data) {
    go() {
      let { slug } = this.$route.params
      let url = '/books/slug/' + slug
      url = url + '?page=' + this.page
      url = encodeURI(url)
      this.axios
        .get(url)
        .then((response) => {
          let { data } = response.data
          this.book = data
        })
        .catch((error) => {
          let { responses } = error
          console.log(responses)
        })
    },
    ...mapActions({
      add: 'cart/add',
      setAlert: 'alert/set',
    }),
    buy() {
      this.add(this.book)
      this.setAlert({
        status: true,
        color: 'success',
        text: 'Added to cart',
      })
    },
  },
}
</script>

<style scoped>
.v-sheet.v-card {
  position: relative !important;
  top: -35px;
}
.d-flex .v-card__text {
  font-size: 12px !important;
}
</style>

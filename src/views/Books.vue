<template>
  <div>
    <div v-if="loading">
      <booksloading />
    </div>
    <div v-else>
      <v-container class="ma-0 pa-2" grid-list-sm>
        <v-subheader class="pink--text">
          All Books
        </v-subheader>

        <div v-for="book in books" :key="`book-` + book.id" xs6>
          <book-item :book="book"></book-item>
        </div>

        <v-pagination
          v-model="page"
          @input="go"
          :length="lengthPage"
          :total-visible="5"
          color="pink"
        ></v-pagination>
      </v-container>
    </div>
  </div>
</template>
<script>
import BookItem from '../components/BookItem.vue'
import booksloading from '../components/BooksSkleton.vue'
export default {
  name: 'Books',
  components: { BookItem, booksloading },
  data: () => ({
    loading: false,
    books: [],
    page: 0,
    lengthPage: 0,
  }),
  created() {
    this.go()
  },
  methods: {
    go() {
      this.loading = !false
      let url = '/books?page=' + this.page
      this.axios
        .get(url)
        .then((response) => {
          let { data } = response.data
          let { meta } = response.data
          this.books = data
          this.page = meta.current_page
          this.lengthPage = meta.last_page
          this.loading = false
        })

        .catch((error) => {
          let { response } = error
          console.log(response)
        })
    },
  },
}
</script>

<template>
  <div>
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
</template>
<script>
import BookItem from '../components/BookItem.vue'
export default {
  name: 'Books',
  components: { BookItem },
  data: () => ({
    books: [],
    page: 0,
    lengthPage: 0,
  }),
  created() {
    this.go()
  },
  methods: {
    go() {
      let url = '/books?page=' + this.page
      this.axios
        .get(url)
        .then((response) => {
          let { data } = response.data
          let { meta } = response.data
          this.books = data
          this.page = meta.current_page
          this.lengthPage = meta.last_page
        })
        .catch((error) => {
          let { response } = error
          console.log(response)
        })
    },
  },
}
</script>

<template>
  <div class="overflow-hidden">
    <v-container fluid class="mb-15">
      <h2>Discover</h2>
      <p class="text--disabled">
        Search your favorite book here
      </p>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="scaletransition"
      >
        <search @closed="closeDialog" />
      </v-dialog>
      <!-- <div class="d-flex"> -->
      <!-- <v-text-field
          slot="extension"
          hide-details
          append-icon="mdi-microphone"
          flat
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          class="mb-5"
        ></v-text-field> -->
      <v-text-field
        slot="extension"
        hide-details
        flat
        label="Search"
        solo-inverted
        class="mb-5"
        @click="dialog = true"
      ></v-text-field>
      <!-- <v-btn depressed color="pink" large class="ml-2">
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn> -->
      <!-- </div> -->

      <!-- Favorite -->

      <div class="d-flex justify-space-between mt-5">
        <h2>Best Seller</h2>
        <!-- <v-btn small text to="/books" class="pink--text text-right">
          Favorite
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn> -->
      </div>

      <v-slide-group class="mb-4" multiple c>
        <v-slide-item
          v-for="topBook in topBooks"
          :key="topBook.id"
          v-slot="{ active, toggle }"
        >
          <v-card :to="'/book/' + topBook.slug">
            <div class="ma-2 mb-8" height="200" width="100" @click="toggle">
              <v-img
                width="100"
                height="150"
                aspect-ratio="1.7"
                :src="getImage('/books/' + topBook.cover)"
                class="rounded-lg"
              ></v-img>
              <div class="mt-2">
                <div
                  class="body text-truncate font-weight-black text-h5"
                  value="h1"
                  style="max-width: 120px;"
                >
                  {{ topBook.title }}
                </div>
                <div
                  class="subtitle1 text--disabled text-truncate text-body-1"
                  style="max-width: 100px;"
                >
                  {{ topBook.author }}
                </div>
                <div class="text-sm-left pink--text">
                  Rp.{{ topBook.price.toLocaleString('id-ID') }}
                </div>
              </div>
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <!-- <VueSlickCarousel v-bind="settings">
        <div v-for="i in 10" :key="i">
          <v-img
            width="100"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
            class="rounded-lg"
          ></v-img>
          <p>test</p>
        </div>
      </VueSlickCarousel> -->
      <!-- <v-col>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
              class="rounded-lg"
            ></v-img>
            <h3 class="">Pengetahuan Alam</h3>
            <p>By Fahriz</p>
          </v-col> -->

      <!-- Akhir Favorite -->

      <div class="d-flex justify-space-between mt-10 mb-5">
        <h2>Recent</h2>
        <v-btn small text to="/books" class="pink--text">
          See All
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <div v-for="book in books" :key="book.id">
        <book-item :book="book"></book-item>
      </div>
    </v-container>
    <BotomBavigation />
  </div>
</template>

<script>
// import TopBar from '../components/TopBar'
import BotomBavigation from '../components/BottomNavigation.vue'
import BookItem from '../components/BookItem.vue'
// import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Home',
  components: {
    // TopBar,
    BookItem,
    BotomBavigation,
    Search: () =>
      import(/* webpackChunkName: "search" */ '@/components/Search.vue'),
    // VueSlickCarousel,
  },
  data: () => {
    return {
      categories: [],
      books: [],
      topBooks: [],
      dialog: false,
      settings: {
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 3,
        slidetoScroll: 3,
        touchThreshold: 5,
        swipe: false,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrow: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrow: false,
              swipe: true,
              swipeToSlide: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              swipe: true,
              swipeToSlide: true,
              arrow: false,
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    closeDialog(value) {
      this.dialog = value
    },
  },

  created() {
    this.axios
      .get('/books/top/4')
      .then((response) => {
        let { data } = response.data
        this.topBooks = data
      })
      .catch((error) => {
        let { response } = error
        console.log(response)
      }),
      this.axios
        .get('/books/random/4')
        .then((response) => {
          let { data } = response.data
          this.books = data
        })
        .catch((error) => {
          let { response } = error
          console.log(response)
        })
  },
}
</script>
<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-card__text {
  color: #1976d2 !important;
}
.pink {
  color: #f06292 !important;
}
</style>

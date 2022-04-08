<template>
  <div class="overflow-hidden">
    <TopBar />
    <v-container fluid class="mb-15">
      <h2>Discover</h2>
      <p class="text--disabled">
        Search your favorite book here
      </p>
      <div class="d-flex">
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
        ></v-text-field>
        <v-btn depressed color="pink" large class="ml-2">
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>
      </div>

      <!-- Favorite -->

      <div class="d-flex justify-space-between mt-5">
        <h2>Best Seller</h2>
        <v-btn small text to="/books" class="pink--text text-right">
          Favorite
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <v-slide-group v-model="model" class="mb-4" multiple c>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <div class="ma-2 mb-8" height="200" width="100" @click="toggle">
            <v-img
              width="100"
              height="150"
              aspect-ratio="1.7"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/9/29/d5c0f94f-72d0-42d4-ab44-0dda563114f1.jpg"
              class="rounded-lg"
            ></v-img>
            <div class="mt-2">
              <div class="body">The 100$ Startup</div>
              <div class="subtitle1">Chris Guillebeau</div>
              <div>Rp. 129.000</div>
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
        <h2>Best Popular</h2>
        <v-btn small text to="/books" class="pink--text">
          See All
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-row>
        <v-col cols="4">
          <v-img
            height="150"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="http://blokbojonegoro.com/upload/Image/image_74_img_20180623_081356.jpg"
            class="rounded-lg"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <div class="mt-5">
            <div class="body">Dilan 1990</div>
            <div class="subtitle1">dividi Baiq</div>
            <div>333</div>
            <div>Rp. 129.000</div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-img
            height="150"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="http://blokbojonegoro.com/upload/Image/image_74_img_20180623_081356.jpg"
            class="rounded-lg"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <div class="mt-5">
            <div class="body">Dilan 1990</div>
            <div class="subtitle1">dividi Baiq</div>
            <div>333</div>
            <div>Rp. 129.000</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <BotomBavigation />
  </div>
</template>
<style>
.v-card__text {
  color: #1976d2 !important;
}
.pink {
  color: #f06292 !important;
}
</style>
<script>
import TopBar from '../components/TopBar'
import BotomBavigation from '../components/BottomNavigation.vue'
// import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Home',
  components: {
    TopBar,
    BotomBavigation,
    // VueSlickCarousel,
  },
  data: () => {
    return {
      books: {
        judul: 'Virtual Tour Candi Prambanan',
        lokasi: 'Sleman, Yogyakarta',
        url_gambar: 'https://imgur.com/w1239.jpg',
        harga: 35000,
        score: 3.9,
      },
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
      cards: [
        // {
        //   title: 'Pre-fab homes',
        //   src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        //   flex: 12,
        // },
        {
          title: 'Laravel Book',
          src:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--nocQYReD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/http://anastasionico.uk/img/blog/the-code-behind-laravel-6.jpg',
          flex: 6,
          price: 'Rp. 90.000',
        },
        {
          title: 'React Book',
          src: 'https://miro.medium.com/max/1000/0*aHvK7Rbt_Dv74mWq.png',
          flex: 6,
          price: 'Rp. 190.000',
        },
      ],
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }
  },
}
</script>

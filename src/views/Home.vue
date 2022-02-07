<template>
  <div>
    <v-container fluid>
      <h2 class="mb-5">Discover</h2>
      <v-text-field
        slot="extension"
        hide-details
        append-icon="mdi-microphone"
        flat
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        class="mb-5"
      ></v-text-field>

      <!-- Favorite -->
      <div class="text-right">
        <v-btn small text to="/books" class="black--text">
          Favorite
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-row dense class="mb-5">
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-text v-text="card.price"></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Akhir Favorite -->
      <div class="text-right">
        <v-btn small text to="/books" class="black--text">
          All Books
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              Clean Code
            </v-card-title>

            <v-card-subtitle></v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.v-card__text {
  color: #1976d2 !important;
}
</style>
<script>
//import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  data: () => ({
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
  }),
}
</script>

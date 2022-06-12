<template>
  <div class="overflow-hidden">
    <v-container fluid class="mb-15">
      <div class="heading">
        <h2 />
        <p class="text--disabled" />
      </div>

      <v-text-field
        slot="extension"
        hide-details
        flat
        solo-inverted
        class="mb-5"
      ></v-text-field>

      <!-- Favorite -->

      <div class="sub-heading d-flex justify-space-between mt-5">
        <h2></h2>
      </div>

      <v-slide-group class="mb-4" multiple c>
        <v-slide-item v-for="i in 5" :key="i" v-slot="{ active, toggle }">
          <v-card>
            <div class="ma-2 mb-8" height="200" width="100" @click="toggle">
              <div class="book-img-top"><v-img></v-img></div>
              <div class="book-info-top mt-2">
                <h2></h2>
                <p></p>
                <p></p>
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
      <!-- Akhir Favorite -->

      <div class="sub-heading d-flex justify-space-between mt-10 mb-5">
        <h2></h2>
        <p></p>
      </div>
      <div v-for="i in 5" :key="i">
        <v-card>
          <v-row>
            <v-col cols="4">
              <div class="book-img">
                <v-img></v-img>
              </div>
            </v-col>
            <v-col cols="8">
              <div class="book-info mt-5">
                <h2></h2>
                <p></p>
                <p></p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'homeloading',
  data: () => {
    return {
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
}
</script>
<style scoped>
.heading h2,
.heading p {
  margin-top: 10px;
  width: 250px;
  height: 24px;
  background-color: #eee;
}

.sub-heading h2,
.sub-heading p {
  margin-left: 5px;
  width: 250px;
  height: 24px;
  background-color: #eee;
}
.book-info h2,
.book-info p {
  margin-top: 10px;
  width: 200px;
  height: 24px;
  background-color: #eee;
}

.book-info-top h2,
.book-info-top p {
  width: 100px;
  height: 14px;
  background-color: #eee;
}
.book-img {
  margin-top: 15px;
  width: 100px;
  height: 100px;
  background-color: #eee !important;
}
.book-img-top {
  margin-top: 15px;
  width: 100px;
  height: 100px;
  background-color: #eee !important;
}
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

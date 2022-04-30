<template>
  <div>
    <v-card :to="'/book/' + book.slug">
      <v-row>
        <v-col cols="4">
          <v-img
            height="150"
            :src="getImage('/books/' + book.cover)"
            class="rounded-lg"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <div class="mt-5">
            <div
              class="text-h5 font-weight-black text-truncate"
              style="max-width: 350px;"
            >
              {{ book.title }}
            </div>
            <div class="subtitle-1 text--disabled">
              {{ book.author }}
            </div>
            <!-- <div class="subtitle-2 text--disabled">
              <v-icon>mdi-book-open-variant</v-icon>
              333 pages
            </div> -->
            <div class="body-1 pink--text">
              Rp.{{ book.price.toLocaleString('id-ID') }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'BookItem',
  props: ['book'],
  data: () => ({}),
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

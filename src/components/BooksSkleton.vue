<template>
  <div>
    <v-container>
      <div class="sub-heading mb-2">
        <p class="mt-2"></p>
      </div>
      <div v-for="i in 4" :key="i" xs6>
        <v-card color="grey" class="mt-5">
          <v-row>
            <v-col cols="4">
              <div class="books-img">
                <v-img></v-img>
              </div>
            </v-col>
            <v-col cols="8">
              <div class="mt-5 books-info">
                <p></p>
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
  name: 'booksloading',
  data: () => ({
    page: 0,
    lengthPage: 0,
  }),
}
</script>
<style scoped>
.sub-heading p {
  margin-left: 5px;
  width: 250px;
  height: 24px;
  background-color: #eee !important;
}

.books-info p {
  margin-top: 10px;
  width: 200px;
  height: 24px;
  background-color: #eee !important;
}

.books-img {
  padding: 10px;
  margin-top: 15px;
  width: 100px;
  height: 100px;
  background-color: #eee !important;
}

.card-loading {
  /* padding: 10px; */
  margin-top: 15px;
  width: 100px;
  height: 100px;
  background-color: #eee !important;
}
</style>

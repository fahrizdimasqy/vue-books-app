<template>
  <div>
    <div class="book-img py-8">
      <v-img></v-img>
    </div>

    <v-card class="rounded-t-xl mt-5 px-2 pb-5" style="height: 100vh;">
      <div class="book-info">
        <h2></h2>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div class="d-flex sub-info">
        <p></p>
        <p></p>
        <div>
          <p></p>
          <span></span>
        </div>
      </div>
      <div class="description" v-for="i in 6" :key="i">
        <p></p>
      </div>
      <div class="category-info d-flex">
        <p></p>
        <div></div>
      </div>
      <div class="book-info">
        <p></p>
      </div>
      <div class="button-info">
        <div></div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'BookLoadig',
}
</script>

<style scoped>
.book-info h2 {
  margin-top: 20px;
  width: 255px;
  height: 24px;
  background-color: #eee;
}

.book-info p {
  margin-top: 20px;
  width: 150px;
  height: 24px;
  background-color: #eee;
}

.sub-info p {
  margin-right: 10px;
  margin-top: 20px;
  width: 150px;
  height: 24px;
  background-color: #eee;
}

.description p {
  margin-top: 20px;
  width: 100%;
  height: 24px;
  background-color: #eee;
}
.category-info p {
  margin-top: 20px;

  width: 150px;
  height: 24px;
  background-color: #eee;
}
.category-info div {
  margin-top: 20px;
  margin-left: 5px;
  width: 150px;
  height: 24px;
  background-color: #eee;
}

.button-info div {
  margin-top: 20px;
  width: 100%;
  height: 34px;
  background-color: #eee;
}

.book-img {
  margin-top: 15px;
  width: 100%;
  height: 200px;
  background-color: #eee !important;
}

.v-sheet.v-card {
  position: relative !important;
  top: -35px;
}
.d-flex .v-card__text {
  font-size: 12px !important;
}
</style>

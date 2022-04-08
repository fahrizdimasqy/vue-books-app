<template>
  <v-bottom-navigation :value="selectedItem" color="pink" horizontal grow>
    <v-btn>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn>
      <v-icon>mdi-bookmark</v-icon>
    </v-btn>
    <v-btn>
      <v-icon>mdi-note-text</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data() {
    return {
      selectedItem: 0,
    }
  },
}
</script>

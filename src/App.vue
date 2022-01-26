<template>
  <v-app>
    <v-app-bar app color="white" light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge color="orange" overlap>
          <template v-slot:badge>
            <span>3</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      Side Menu
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer></v-footer>
    <v-bottom-navigation :value="value" color="primary" horizontal>
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.v-item-group.v-bottom-navigation {
  position: fixed;
}
</style>
<script>
export default {
  name: 'App',

  data: () => ({
    //
    value: 1,
    drawer: false,
    menus: [
      { title: 'Home', icon: 'mdi-home', route: '/' },
      { title: 'About', icon: 'mdi-account', route: '/about' },
    ],
  }),
}
</script>

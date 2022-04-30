<template>
  <v-app>
    <v-app-bar app color="white" light v-if="isHome">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge color="pink" overlap>
          <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-app-bar app color="white" light v-else>
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge color="pink" overlap>
          <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img
              src="https://fahrizdimasqy.github.io/dist/img/fahriz-pp.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Fahriz Dimasqy</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div class="pa-2" v-if="guest">
          <v-btn block color="pink" class="mb-1 white--text" to="/login">
            <v-icon left class="white--text">mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="grey white--text" to="/register">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-list-item
          v-for="(item, index) in menus"
          :key="`menu-` + index"
          :to="item.route"
          color="primary"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout">
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <alert />

    <v-main>
      <v-slide-y-transition>
        <router-view />
      </v-slide-y-transition>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
<style>
@import './assets/css/style.css';
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Alert: () => import('@/components/Alert.vue'),
  },
  data: () => ({
    //
    value: 1,
    selectedItem: 1,
    drawer: false,
    guest: true,
    menus: [
      { title: 'Home', icon: 'mdi-home', route: '/' },
      { title: 'About', icon: 'mdi-account', route: '/about' },
    ],
  }),
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
    ...mapGetters({
      countCart: 'cart/count',
    }),
  },
}
</script>

<template>
  <v-app>
    <v-app-bar app color="white" light v-if="isHome">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon @click="setDialogComponent('cart')">
        <v-badge color="pink" overlap>
          <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-app-bar app color="white" light v-else-if="isLogin | isRegister">
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-app-bar app color="white" light v-else>
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="setDialogComponent('cart')">
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
            <v-img :src="getImage('/users/' + user.avatar)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div class="pa-2" v-if="guest">
          <v-btn block color="pink " class="mb-1 white--text" to="/login">
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
        <div v-if="loading">
          <v-img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            width="50"
            class="mx-auto"
          ></v-img>
        </div>
      </template>
    </v-navigation-drawer>
    <alert />
    <keep-alive>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialogbottom-transition"
      >
        <component :is="currentComponent" @closed="setDialogStatus"></component>
        <!-- <cart @closed="closeDialog" /> -->
      </v-dialog>
    </keep-alive>
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
import { mapActions, mapGetters } from 'vuex'
// import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    Alert: () => import('@/components/Alert.vue'),
    // Cart:()=> import ('@/components/Cart.vue')
    Cart: () => import(/* webpackChunkName: "cart" */ '@/components/Cart.vue'),
    Search: () =>
      import(/* webpackChunkName: "search" */ '@/components/Search.vue'),
  },
  data: () => ({
    //
    loading: false,
    value: 1,
    selectedItem: 1,
    drawer: false,
    menus: [
      { title: 'Home', icon: 'mdi-home', route: '/' },
      { title: 'About', icon: 'mdi-account', route: '/about' },
    ],
  }),
  computed: {
    ...mapGetters({
      countCart: 'cart/count',
      guest: 'auth/guest',
      user: 'auth/user',
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
    }),
    isHome() {
      return this.$route.path === '/'
    },

    isLogin() {
      return this.$route.path === '/login'
    },
    isRegister() {
      return this.$route.path === '/register'
    },
    dialog: {
      get() {
        return this.dialogStatus
      },
      set(value) {
        return this.setDialogStatus(value)
      },
    },
  },
  methods: {
    ...mapActions({
      setDialogStatus: 'dialog/setStatus',
      setDialogComponent: 'dialog/setComponent',
      setAuth: 'auth/set',
      setAlert: 'alert/set',
    }),
    closeDialog(value) {
      this.dialog = value
    },
    logout() {
      this.loading = !false
      let config = {
        headers: {
          Authorization: 'Bearer ' + this.user.api_token,
        },
      }
      this.axios
        .post('/logout', {}, config)
        .then(() => {
          this.setAuth({})
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Logout successfully',
          })
          this.loading = false
        })
        .catch((error) => {
          let { data } = error.response
          this.setAlert({
            status: true,
            color: 'error',
            text: data.message,
          })
          this.loading = !false
        })
    },
  },
}
</script>

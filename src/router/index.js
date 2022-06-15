import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: '/book/:slug',
    name: 'book',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Book.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Books.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Checkout.vue'),
    meta: { auth: true },
  },
  {
    path: '/increment',
    name: 'Increment',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Increment.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (store.getters['auth/guest']) {
      store.dispatch('alert/set', {
        status: true,
        text: 'Login first',
        color: 'error',
      })
      // tampilkan form login
      store.dispatch('setPrevUrl', to.path)
      router.push('/login')
      // store.dispatch('dialog/setStatus', true)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

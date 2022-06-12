<template>
  <div style="height: 100vh;">
    <v-card style="height: 100vh;">
      <v-toolbar light color="white">
        <v-btn icon light @click.native="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Your Shopping Cart!</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-container fluid>
        <div v-if="countCart === 0">
          <v-alert outlined color="warning" icon="mdi-cart-off">
            Keranjang belanja kosong
          </v-alert>
        </div>
        <v-list three-line v-if="countCart > 0">
          <template v-for="(item, index) in carts">
            <v-list-item :key="'cart' + index">
              <v-list-item-avatar>
                <v-img :src="getImage('/books/' + item.cover)"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle>
                  Rp. {{ item.price.toLocaleString('id-ID') }} ({{
                    item.weight
                  }}
                  kg)
                  <span style="float: right;">
                    <v-btn
                      icon
                      small
                      rounded
                      depressed
                      @click.stop="removeCart(item)"
                    >
                      <v-icon light color="error">mdi-minuscircle</v-icon>
                    </v-btn>
                    {{ item.quantity }}
                    <v-btn
                      icon
                      small
                      rounded
                      depressed
                      @click.stop="addCart(item)"
                    >
                      <v-icon light color="success">mdi-pluscircle</v-icon>
                    </v-btn>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-container>
      <h1></h1>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapGetters({
      carts: 'cart/carts',
      countCart: 'cart/count',
      totalPrice: 'cart/totalPrice',
      totalQuantity: 'cart/totalQuantity',
      totalWeight: 'cart/totalWeight',
    }),
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      addCart: 'cart/add',
      removeCart: 'cart/remove',
      setCart: 'cart/set',
    }),
    checkout() {
      this.close()
      this.$router.push({ path: '/checkout' })
    },
    close() {
      this.$emit('closed', false)
    },
  },
}
</script>

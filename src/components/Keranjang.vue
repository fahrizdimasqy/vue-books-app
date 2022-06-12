<template>
  <div>
    <v-card>
      <v-toolbar light color="white">
        <v-btn icon light @click.native="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Your Shopping Cart!</v-toolbar-title>
      </v-toolbar>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'keranjang',
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
    }),
  },
  close() {
    this.$emit('closed', false)
  },
}
</script>

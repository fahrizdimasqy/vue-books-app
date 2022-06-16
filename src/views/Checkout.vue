<template>
  <div>
    <v-subheader>Shipping Address</v-subheader>
    <div>
      <v-card flat>
        <v-container>
          <v-form ref="form" lazy-validation>
            <v-text-field
              label="Name"
              v-model="name"
              required
              append-icon="mdi-user"
            ></v-text-field>
            <v-textarea
              label="Address"
              v-model="address"
              required
              auto-grow
              rows="3"
            ></v-textarea>

            <v-text-field
              label="Phone"
              v-model="phone"
              required
              append-icon="mdi-phone"
            ></v-text-field>
            <!-- <v-select
              v-model="province_id"
              :items="provinces"
              item-text="province"
              item-value="id"
              label="Province"
              persistent-hint
              single-line
            ></v-select> -->
            <!-- <v-select
              v-model="city_id"
              v-if="province_id > 0"
              :items="citiesByProvince"
              item-text="city_name"
              item-value="id"
              label="City"
              persistent-hint
              single-line
            ></v-select> -->
          </v-form>
          <v-card-actions>
            <v-btn block large color="success" dark @click="saveShipping">
              <v-icon>mdi-content-save</v-icon>
              &nbsp; Save
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </div>
    <div v-if="countCart > 0">
      <v-card flat>
        <v-list three-line v-if="countCart > 0">
          <template v-for="(item, index) in carts">
            <v-list-item :key="'cart' + index">
              <v-list-item-avatar>
                <v-img :src="getImage('/books/' + item.cover)"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  Rp. {{ item.price.toLocaleString('id-ID') }} ({{
                    item.weight
                  }}
                  kg)
                  <span style="float: right;">
                    {{ item.quantity }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-container>
          <v-card-actions>
            Subtotal
            <v-spacer />
            Rp. {{ totalPrice.toLocaleString('id-ID') }}
          </v-card-actions>
        </v-container>
      </v-card>
    </div>
    <v-subheader>Total</v-subheader>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs6 text-center>
            Total Bill ({{ totalQuantity }} items)
            <div class="title">{{ totalPrice.toLocaleString('id-ID') }}</div>
          </v-flex>
          <v-flex xs6 text-center>
            <v-btn
              color="orange"
              @click="dialogConfirm = true"
              :disabled="totalPrice == 0"
            >
              <v-icon light>mdi-cash</v-icon>
              &nbsp; Pay
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <template>
      <v-layout row justify-center>
        <v-dialog v-model="dialogConfirm" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Confirmation!</v-card-title>
            <v-card-text>
              If You continue, transaction will be processed
            </v-card-text>
            <v-card-actions>
              <v-btn color="warning" @click="cancel">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success" @click="pay">Continue</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'checkout',
  data() {
    return {
      name: '',
      address: '',
      phone: '',
      shippingCost: 0,
      totalBill: 0,
      dialogConfirm: false,
      // province_id: 0,
      // city_id: 0,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      // provinces: 'region/provinces',
      // cities: 'region/cities',
      carts: 'cart/carts',
      countCart: 'cart/count',
      totalPrice: 'cart/totalPrice',
      totalQuantity: 'cart/totalQuantity',
      totalWeight: 'cart/totalWeight',
      calculateBill() {
        // this.shippingCost = this.totalPrice
        this.totalBill = parseInt(this.totalBill) + parseInt(this.totalPrice)
      },
    }),
    // citiesByProvince() {
    //   let province_id = this.province_id
    //   return this.cities.filter((city) => {
    //     if (city.province_id == province_id) return city
    //   })
    // },
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setAuth: 'auth/set',
      setPayment: 'setPayment',
      // setProvinces: 'region/setProvinces',
      // setCities: 'region/setCities',
    }),
    saveShipping() {
      let formData = new FormData()
      formData.set('name', this.name),
        formData.set('address', this.address),
        formData.set('phone', this.phone)

      let config = {
        headers: {
          Authorization: 'Bearer ' + this.user.api_token,
        },
      }
      this.axios.post('/shipping', formData, config).then((response) => {
        let { data } = response
        this.setAuth(data.data)
        this.setAlert({
          status: true,
          text: data.message,
          color: 'success',
        }).catch((error) => {
          let { data } = error
          this.setAlert({
            status: true,
            text: data.message,
            color: 'error',
          })
        })
      })
    },
    pay() {
      this.dialogConfirm = false
      let safeCart = JSON.stringify(this.carts)
      let formData = new FormData()
      formData.set('carts', safeCart)
      let config = {
        headers: {
          Authorization: 'Bearer ' + this.user.api_token,
        },
      }
      this.axios
        .post('/payment', formData, config)
        .then((response) => {
          let { data } = response
          if (data && data.status == 'success') {
            this.setPayment(data.data)
            this.$router.push({ path: '/payment' })
            this.setCart([])
          }
          this.setAlert({
            status: true,
            text: data.message,
            color: data.status,
          })
        })
        .catch((error) => {
          let { data } = error.response
          this.setAlert({
            status: true,
            text: data.message,
            color: 'error',
          })
        })
    },
    cancel() {
      this.dialogConfirm = false
    },
  },
}
</script>

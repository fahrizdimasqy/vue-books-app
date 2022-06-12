<template>
  <v-container class="">
    <div v-if="loading">
      <v-img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        width="50"
        class="mx-auto"
      ></v-img>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation v-else>
      <h2 class="pink--text">Create a New Account</h2>
      <p class="text--disabled">create an account so you can buy books</p>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        flat
        label="Name"
        solo-inverted
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        flat
        label="Email"
        solo-inverted
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="showPassword ? 'text' : 'password'"
        flat
        label="Password"
        solo-inverted
        required
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do You agree with our Privacy Policy?"
        required
      ></v-checkbox>
      <v-btn
        @click="submit"
        block
        large
        color="pink lighten-1"
        class="white--text"
        :disabled="!valid"
      >
        Create Account
      </v-btn>
      <v-btn @click="clear" block large class="mt-3">
        Reset
        <v-icon right dark>mdi-lock-reset</v-icon>
      </v-btn>

      <p class="text--disabled text-center mt-3">
        Already have an account?
        <a class="pink--text" href="/login">Login</a>
      </p>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Register',

  data: () => ({
    loading: false,
    checkbox: false,
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    showPassword: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 6) || 'Min 6 Characters',
    ],
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setAuth: 'auth/set',
    }),
    submit() {
      this.loading = true
      if (this.$refs.form.validate()) {
        let formData = new FormData()
        formData.set('name', this.name)
        formData.set('email', this.email)
        formData.set('password', this.password)
        this.axios
          .post('/register', formData)
          .then((response) => {
            let { data } = response.data
            this.setAuth(data)
            this.setAlert({
              status: true,
              color: 'success',
              text: 'Register success',
            })
            this.loading = false
            // this.close()
            this.$router.push({ name: 'Home' })
          })
          .catch((error) => {
            let { data } = error.response.data
            this.loading = false
            this.setAlert({
              status: true,
              color: 'error',
              text: data.message,
            })
          })
      }
    },
    // close() {
    //   this.$emit('closed', false)
    // },

    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>

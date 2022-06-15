<template>
  <v-container>
    <div class="mt-5">
      <div v-if="loading">
        <v-img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          width="50"
          class="mx-auto"
        ></v-img>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation v-else>
        <h2 class="pink--text">Welcome Back</h2>
        <p class="text--disabled">
          I'm so happy to see. You can continue to login for buy books
        </p>
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
          :rules="passwordRules"
          flat
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          solo-inverted
          required
          :type="showPassword ? 'text' : 'password'"
          hint="At least 6 characters"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn
          block
          large
          depressed
          color="pink"
          class="white--text"
          @click="submit"
        >
          Login
        </v-btn>
        <p class="mt-3 text-center text--disabled">
          Don't have an account?
          <a href="/register" class="pink--text mt-3">Register</a>
        </p>
      </v-form>
    </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',

  data: () => ({
    loading: false,
    valid: true,
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
      prevUrl: 'prevUrl',
    }),
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setAuth: 'auth/set',
    }),
    submit() {
      this.loading = !false
      if (this.$refs.form.validate()) {
        let formData = {
          email: this.email,
          password: this.password,
        }
        this.axios
          .post('/login', formData)
          .then((response) => {
            let { data } = response.data
            this.setAuth(data)
            if (this.user.id > 0) {
              this.setAlert({
                status: true,
                color: 'success',
                text: 'Login success',
              })
              this.loading = false
              // if (this.prevUrl.length > 0) this.$router.push(this.prevUrl)
              this.$router.push({ name: 'Home' })
              this.close()
            } else {
              this.setAlert({
                status: true,
                color: 'error',
                text: 'Login failed',
              })
              this.loading = false
            }
          })
          .catch((error) => {
            this.loading = false
            let responses = error.response
            this.setAlert({
              status: true,
              text: responses.data.message,
              color: 'error',
            })
          })
      }
    },
    close() {
      this.$emit('closed', false)
    },
  },
}
</script>

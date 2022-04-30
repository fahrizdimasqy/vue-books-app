<template>
  <v-container>
    <div class="mt-5">
      <v-form ref="form" v-model="valid" lazy-validation>
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
          solo-inverted
          required
        ></v-text-field>
        <v-btn block large depressed color="pink" class="white--text">
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
export default {
  name: 'Login',

  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

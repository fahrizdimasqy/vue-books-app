<template>
  <v-container class="mt-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <h2 class="pink--text">Create a New Account</h2>
      <p class="text--disabled">create an account so you can buy books</p>
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        flat
        label="Username"
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
        :rules="passwordRules"
        flat
        label="Password"
        solo-inverted
        required
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label=" I have read and agree with terms and conditions"
        required
      ></v-checkbox>
      <v-btn block large depressed color="pink" class="white--text">
        Create Account
      </v-btn>
      <p class="text--disabled text-center mt-3">
        Already have an account?
        <a class="pink--text" href="/login">Login</a>
      </p>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: 'Register',

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

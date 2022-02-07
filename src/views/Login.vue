<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <h3 class="blue--text text-center mb-5">Form Login</h3>
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

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
    </v-form>
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

<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Registration form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <form>
            <v-text-field
              v-model="email"
              label="E-mail"
              :error-messages="errors.collect('email')"
              v-validate="'required|email'"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-text-field
              label="Enter your password"
              name="password"
              v-model="password"
              data-vv-name="password"
              data-vv-delay="100"
              :error-messages="errors.collect('password')"
              v-validate="'required|min:8'"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm your password"
              v-model="passwordConfirm"
              name="passwordConfirm"
              data-vv-name="passwordConfirm"
              data-vv-delay="100"
              :error-messages="errors.collect('passwordConfirm')"
              v-validate="'required|confirmed:password'"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e2 = !e2)"
              :type="e2 ? 'password' : 'text'"
              required
            ></v-text-field>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Sign Up</v-btn>
        </v-card-actions>
        <v-snackbar
          :timeout="3000"
          :bottom="true"
          :right="true"
          :multi-line="false"
          v-model="snackbar"
        >
          {{ snackbarText }}
          <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    e1: true,
    e2: true,
    password: '',
    passwordConfirm: '',
    email: '',
    snackbarText: 'Input is not valid!',
    snackbar: false,
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'pass',
        passwordConfirm: 'confirm pass'
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll().then(result => {
        if (!result) {
          this.snackbar = true
        } else {
          this.clear()
        }
      }).catch(() => {
        this.snackbar = true
      })
    },
    clear () {
      this.password = ''
      this.email = ''
      this.passwordConfirm = ''
      this.$validator.reset()
    }
  }
}
</script>

<style scoped>

</style>

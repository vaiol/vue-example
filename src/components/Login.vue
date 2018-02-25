<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
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
              v-validate="'required'"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              required
            ></v-text-field>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Login</v-btn>
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
    password: '',
    email: '',
    snackbarText: 'Input is not valid!',
    snackbar: false,
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'Password'
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
      this.$validator.reset()
    }
  }
}
</script>

<style scoped>

</style>

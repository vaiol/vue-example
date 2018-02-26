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
              label="E-mail"
              v-model="email"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              :error-messages="emailErrors"
              required
            ></v-text-field>
            <v-text-field
              label="Enter your password"
              v-model="password"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              :error-messages="passwordErrors"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm your password"
              v-model="confirmPassword"
              @input="$v.confirmPassword.$touch()"
              @blur="$v.confirmPassword.$touch()"
              :error-messages="confirmPasswordErrors"
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email, maxLength: maxLength(255) },
    password: { required, maxLength: maxLength(255), minLength: minLength(8) },
    confirmPassword: { required, sameAsPassword: sameAs('password') }
  },

  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    e1: true,
    e2: true,
    snackbarText: 'Input is not valid!',
    snackbar: false
  }),

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.maxLength && errors.push('E-mail must be at most 255 characters long')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.maxLength && errors.push('Password must be at most 255 characters long')
      !this.$v.password.minLength && errors.push('Password must be at least 8 characters long')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.sameAsPassword && errors.push('Password must be identical')
      !this.$v.confirmPassword.required && errors.push('Password is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$error) {
        this.snackbar = true
      } else {
        console.log('email: ' + this.email)
        console.log('pass1: ' + this.password)
        console.log('pass2: ' + this.confirmPassword)
        this.clear()
      }
    },
    clear () {
      this.$v.$reset()
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
    }
  }
}
</script>

<style scoped>

</style>

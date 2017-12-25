<template>
  <v-layout column>
    <v-flex xs10 sm8 md6 offset-xs1 offset-sm2 offset-md3>
      <div class = "white elevation-2 registerForm">

        <v-toolbar flat dense class="green" dark>
          <v-toolbar-title dark>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
           <v-text-field
              name="email"
              label="Email"
              v-model="email"
            ></v-text-field>

           <v-text-field
              name="password"
              label="Enter your password"
              hint="At least 8 characters"
              v-model="password"
              min="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'text' : 'password'"
              counter
            ></v-text-field>
          </form>
          <div class="error" v-html="error"></div>
          <p><v-btn class="green" dark @click="login">Login</v-btn></p>
        </div>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      e1: false
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: #dd0000;
  }

  .registerForm {
    margin-top: 50px;
  }
</style>

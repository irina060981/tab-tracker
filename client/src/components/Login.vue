<template>
  <v-layout column>
    <v-flex xs10 sm8 md6 lg4 offset-xs1 offset-sm2 offset-md3 offset-lg4>
      <panel title="Login" addClass="loginForm">
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

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      e1: false
    }
  },
  components: {
    Panel
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
    background: transparent;
  }

  .loginForm {
    margin-top: 50px;
  }
</style>

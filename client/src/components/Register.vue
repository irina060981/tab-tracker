<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">

        <v-toolbar flat dense class="green" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <p><input type="email" name="email" placeholder="email" v-model="email" /></p>
          <p><input type="password" name="password" placeholder="password" v-model="password" /></p>
          <div class="error" v-html="error"></div>
          <p><v-btn class="green" @click="register">Register</v-btn></p>
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
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  // здесь мы ставим контроль за изменением свойства e-mail (так как v-model то изменение отслеживается в обе стороны, через форму на сайте и через код здесь (см. mounted))
  // watch: {
  //   email (value) {
  //     console.log('email changed to ', value)
  //   }
  // },
  // здесь задали поведение дополнительное - Called after the instance has been mounted
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello!'
  //   }, 2000)
  // }
}
</script>

<style scoped>
  .error {
    color: #dd0000;
  }
</style>

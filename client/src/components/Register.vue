<template>
  <div class="register">
    <h1>Register</h1>
    <p><input type="email" name="email" placeholder="email" v-model="email" /></p>
    <p><input type="password" name="password" placeholder="password" v-model="password" /></p>
    <div class="error" v-html="error"></div>
    <p><button @click="register">Register</button></p>
  </div>
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

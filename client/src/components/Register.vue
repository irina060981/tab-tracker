<template>
  <div class="register">
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" />
    <br>
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
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

</style>

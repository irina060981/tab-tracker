<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.theme--green .toolbar__title, .theme--green .btn__content {
  color: #f0f0f0;
}
 
.theme--green .input-group__details:after {
  background-color: #4caf50!important;
}

</style>

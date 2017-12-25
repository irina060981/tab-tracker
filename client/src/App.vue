<template>
  <div id="app" class="theme--green fixed-toolbar">
    <v-app>
      <v-content>
        <v-container>
          <page-header />
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>

</template>

<script>

import PageHeader from '@/components/Header'

export default {
  name: 'app',
  components: { PageHeader }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  min-width: 320px;
}

.theme--green .input-group__details:after {
  background-color: #4caf50!important;
}

.fixed-toolbar .application--wrap {
  margin-top: -60px;
}

.fixed-toolbar .content--wrap {
  margin-top: 60px;
}
</style>

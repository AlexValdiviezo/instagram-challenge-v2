<template>
  <v-app>
    <server-not-found v-if="serverNotFound"/>
    <alert v-if="alert"/>
    <nav-bar />
    <router-view/>
  </v-app>
</template>

<script>
import ServerNotFound from './components/ServerNotFound.vue'
import Alert from './components/Alert.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: { ServerNotFound, Alert, NavBar },
  computed:{
    alert(){
      return this.$store.state.alertModule.alert
    },
    serverNotFound(){
      return this.$store.state.alertModule.serverNotFound
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>

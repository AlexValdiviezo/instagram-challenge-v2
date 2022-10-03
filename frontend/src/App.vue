<template>
  <v-app>
    <server-not-found-component v-if="serverNotFound"/>
    <alert-component v-if="alert"/>

    <NavBar/>

    <card-container></card-container>
  </v-app>
</template>

<script>
import AlertComponent from './components/AlertComponent.vue';
import CardContainer from './components/CardContainer.vue'
import ServerNotFoundComponent from './components/ServerNotFoundComponent.vue';
import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  components: { CardContainer, AlertComponent, ServerNotFoundComponent, NavBar },
  computed:{
    alert(){
      return this.$store.state.alertModule.alert
    },
    serverNotFound(){
      return this.$store.state.alertModule.serverNotFound
    }
  }
};
</script>

<style scoped>
</style>

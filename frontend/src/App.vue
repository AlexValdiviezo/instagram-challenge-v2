<template>
  <v-app>
    <server-not-found-component v-if="serverNotFound"/>
    <alert-component v-if="alert"/>
    <menu-navbar />
    <menu-options/>
    <card-container/>
  </v-app>
</template>

<script>
import AlertComponent from './components/AlertComponent.vue';
import CardContainer from './components/CardContainer.vue'
import MenuNavbar from './components/MenuNavbar.vue'
import MenuOptions from './components/MenuOptions.vue'
import ServerNotFoundComponent from './components/ServerNotFoundComponent.vue';


export default {
  name: 'App',
  components: { MenuNavbar, CardContainer, MenuOptions, AlertComponent, ServerNotFoundComponent},
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

<template>
  <v-app>
    <alert-component/>
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


export default {
  name: 'App',
  components: { MenuNavbar, CardContainer, MenuOptions, AlertComponent},
};
</script>

<style scoped>
</style>

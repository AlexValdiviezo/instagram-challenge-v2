<template>
  <v-app>
    <menu-navbar />
    <card-container/>
  </v-app>
</template>

<script>
import CardContainer from './components/Card-Container.vue';
import MenuNavbar from './components/Menu-Navbar.vue';


export default {
  name: 'App',
  components: { MenuNavbar, CardContainer },
  
};
</script>

<template>
  <v-app>
    <menu-navbar />
    <v-card
    :loading="loading"
    class="mx-auto my-16"
    max-width="374"
    
    >
      <v-card-text>username</v-card-text>
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-text>
      comentarios
      </v-card-text>

    </v-card>
  </v-app>
</template>

<script>
import MenuNavbar from './components/Menu-Navbar.vue';


export default {
  name: 'App',
  components: { MenuNavbar },
  
};
</script>

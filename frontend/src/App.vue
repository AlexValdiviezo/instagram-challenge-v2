<template>
  <v-app>
    <menu-options/>
    <menu-navbar />
    <card-container/>
  </v-app>
</template>

<script>
import CardContainer from './components/CardContainer.vue'
import MenuNavbar from './components/MenuNavbar.vue'
import MenuOptions from './components/MenuOptions.vue'


export default {
  name: 'App',
  components: { MenuNavbar, CardContainer, MenuOptions},
};
</script>

<style scoped>
</style>

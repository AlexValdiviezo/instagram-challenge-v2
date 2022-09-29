<template>
  <v-app-bar fixed outlined color="grey darken-2 white--text">
    <v-icon color="white" @click="changeMenuState">menu</v-icon>
    <v-spacer/>
    <v-app-bar-title>lnstagram</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"Menu-Navbar",
    methods:{
      ...mapActions(['changeIsMenuOpen']),
      changeMenuState(){
        setTimeout(() => {
          this.changeIsMenuOpen(true)
        });
      }
    }
}
</script>

<style scoped>
</style>
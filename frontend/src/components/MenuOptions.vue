<template>
  <v-navigation-drawer 
    v-model="isMenuOpen"
    fixed
    left
    v-click-outside="onClickOutside"
    class="pt-4 pb-4"
  >
    <v-app-bar-title class="text-center">Actions</v-app-bar-title>
    <v-divider></v-divider>
    <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-btn block color="rgba(0,0,0,0)" depressed>
            <v-list-item-title class="text-center font-weight-medium text-h6">ADD POST</v-list-item-title>
          </v-btn>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'MenuOptions',
    data(){
        return{
            
        }
    },
    mounted(){
        this.drawer = true
    },
    methods:{
        ...mapActions(['changeIsMenuOpen']),
        onClickOutside(){
            this.changeIsMenuOpen(false)
        }
    },
    computed:{
        isMenuOpen(){
                return this.$store.state.isMenuOpen
            }
    }
}
</script>

<style>

</style>
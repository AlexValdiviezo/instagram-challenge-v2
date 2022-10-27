<template>
    <nav>

        <v-app-bar app fixed elevation="3">

            <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-switch
            dark
            v-model="theme"
            hide-details
            append-icon="light_mode"
            color="black"
            ></v-switch>
            <v-spacer></v-spacer>
            <v-btn right append to="/" plain retain-focus-on-click>Instagram Challenge</v-btn>
        </v-app-bar>

        <v-navigation-drawer 
            v-model="drawer"
            left
            fixed
            app
            class="pt-4 pb-4"
        >
        <v-app-bar-title class="text-center">Menu Actions</v-app-bar-title>
        <v-divider></v-divider>
        <v-list
            nav
            dense
        >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item to="/home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-btn block plain>
              <v-list-item-title class="text-h6 text-left">Home</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item to="/profile">
            <v-list-item-icon>
              <v-icon>account_circle</v-icon>
            </v-list-item-icon>
            <v-btn block plain>
              <v-list-item-title class="text-h6 text-left">Profile</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-group
            :value="false"
          >
            <template v-slot:activator>
              <v-btn block plain @click="postMenu = !postMenu">
                <v-list-item-icon>
                  <v-icon class="mr-10">collections</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-h6 text-left ml-3">POST</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>{{iconPostMenu}}</v-icon>
                </v-list-item-icon>
              </v-btn>
            </template>

            <v-list-item to="/add-post">
              <v-list-item-icon>
                <v-icon>add_photo_alternate</v-icon>
              </v-list-item-icon>
              <v-btn @click="isUsername" block plain>
                <v-list-item-title class="text-h6 text-left">Add Post</v-list-item-title> 
              </v-btn>
            </v-list-item>
            <v-list-item :to="{name:'myPosts', params:{user: username}}">
              <v-list-item-icon>
                <v-icon>image</v-icon>
              </v-list-item-icon>
              <v-btn block plain>
                <v-list-item-title class="text-h6 text-left">My Posts</v-list-item-title> 
              </v-btn>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
      <v-list>
        <v-list-item class="justify-center">

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </nav>

</template>

<script>
import { mapActions, mapMutations } from 'vuex'
  export default {
    name: 'NavBar',
    data: () => ({
      drawer: false,
      postMenu: false,
    }),
    computed:{
      iconPostMenu(){
        if(this.postMenu) return 'expand_more'
        return 'expand_less'
      },  
      username(){
        return this.$store.state.userModule.username
      },
      theme:{
        get(){
          return !this.$store.state.themeModule.darkMode
        },
        set(value){
          this.changeDarkMode(!value)
          this.$vuetify.theme.dark = !value
        }
      }
    },

    methods:{
      ...mapMutations(['setUsernameIsEmpty', 'setAlert']),
      ...mapActions(['changeDarkMode']),
      isUsername(){
        if(this.$store.state.userModule.username.length <= 0){
          this.setUsernameIsEmpty(true)
          this.setAlert(true)
          this.$router.push('/home')
        }else{
          this.$router.push('/add-post')
        }
      }
    }
  }
</script>
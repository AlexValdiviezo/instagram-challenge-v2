<template>
    <nav>

        <v-app-bar app fixed elevation="3">
            <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-spacer></v-spacer>
            <router-link to="/" tag="div">
              <v-app-bar-title class="title pointer">Instagram Challenge</v-app-bar-title>
            </router-link>
        </v-app-bar>

        <v-navigation-drawer 
            v-model="drawer"
            left
            fixed
            app
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
          <router-link to="/add-post" tag="div">
            <v-btn block color="rgba(0,0,0,0)" depressed>
              <v-list-item-title class="text-center font-weight-medium text-h6">ADD POST</v-list-item-title> 
            </v-btn>
          </router-link>
        </v-list-item-group>
      </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
  export default {
    data: () => ({
      drawer: false
    })
  }
</script>
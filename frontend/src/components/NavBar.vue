<template>
    <nav>

        <v-app-bar app fixed elevation="3">
            <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            
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
        <v-app-bar-title class="text-center">Actions</v-app-bar-title>
        <v-divider></v-divider>
        <v-list
            nav
            dense
        >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-btn to="/add-post" block plain retain-focus-on-click>
            <v-list-item-title class="text-center font-weight-medium text-h6">ADD POST</v-list-item-title> 
          </v-btn>
        </v-list-item-group>
      </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({
      drawer: false
    })
  }
</script>
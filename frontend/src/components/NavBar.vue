<template>

    <nav>
        <v-toolbar>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-spacer></v-spacer>
            
            <v-toolbar-title>Instagram Challenge</v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer 
            v-model="drawer"
            fixed
            left
            temporary
            absolute
            class="pt-4 pb-4"
        >
            <p>a</p>
        </v-navigation-drawer>
    </nav>

</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
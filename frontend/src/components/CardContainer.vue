<template>
    <div >
        <v-card min-height="96vh" class="grey darken-3 py-10 mt-10">
            <section v-if="!loadingState">
                <v-card
                    class="mx-auto my-2"
                    max-width="500"
                    dark
                    outlined
                    raised
                    v-for="post in posts"
                    :key="post.id"
                    >
                    <div class="d-flex pa-4 align-center">
                        <div class="d-flex align-center"><v-icon class="pointer pr-2">person</v-icon>{{post.username}}</div>
                        <v-spacer/>
                        <card-menu-component :post="post" @cardDelete="fetchPosts"><v-icon class="pointer">menu</v-icon></card-menu-component>
                    </div>
                    
                    <v-img
                        :src="post.image"
                    ></v-img>

                    <v-card-title>{{post.title}}</v-card-title>

                    <v-card-text class="d-flex align-center">
                        <v-icon class="pointer pr-2">favorite_border</v-icon>{{post.likes}}
                    </v-card-text>
                </v-card>
            </section>
        </v-card>
        <v-overlay :value="loadingState">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardMenuComponent from './CardMenuComponent.vue'

export default {
  components: { CardMenuComponent },
    name: 'Card-Container',
    mounted(){
        this.fetchPosts()
    },
    computed:{
        posts(){
            return this.$store.state.posts
        },
        loadingState(){
            console.log(this.$store.state.loading)
            return this.$store.state.loading
        }
    },
    methods:{
        ...mapActions(['fetchPosts']),
    }
}
</script>

<style scoped>
    .pointer{
        cursor: pointer
    }
</style>
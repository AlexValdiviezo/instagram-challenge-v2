<template>
    <div >
            <v-layout column class="pt-16">
                <v-card
                    class="mx-auto my-6"
                    max-width="500"
                    outlined
                    raised
                    v-for="post in posts"
                    :key="post.id"
                    >
                    <div class="d-flex pa-4 align-center">
                        <div class="d-flex align-center"><v-icon class="pointer pr-2">person</v-icon>{{post.username}}</div>
                        <v-spacer/>
                        <card-menu :post="post" @cardDelete="fetchPosts"></card-menu>
                    </div>
                    
                    <v-img
                        :src="post.image"
                    ></v-img>

                    <v-card-title>{{post.title}}</v-card-title>

                    <v-card-text class="d-flex align-center">
                        <v-icon class="pointer pr-2">favorite_border</v-icon>{{post.likes}}
                    </v-card-text>
                </v-card>
            </v-layout>
        <v-overlay :value="loadingState">
            <v-progress-circular
                indeterminate
                size="100"
                color="primary"
                width=10
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardMenu from './CardMenu.vue'

export default {
  components: { CardMenu },
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
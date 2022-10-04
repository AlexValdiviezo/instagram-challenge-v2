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
                    <v-card-actions class="pa-4">
                        <router-link :to="`/profile/${post.username}`" tag="div">
                            <v-layout align-center justify-start class="pointer">
                            <v-icon>person</v-icon>
                            <v-card-text>{{post.username}}</v-card-text>
                            </v-layout>
                        </router-link>
                        <v-spacer />
                        <card-menu :post="post" @cardDelete="fetchPosts"></card-menu>
                    </v-card-actions>
                    
                    <v-img
                        :src="post.image"
                    ></v-img>

                    <v-card-title>{{post.title}}</v-card-title>
                    <div class="px-3"><v-divider/></div>
                    <v-card-actions class="pa-4">
                        <v-icon left class="pointer" @click="addLikePost(post.id)">favorite_border</v-icon>{{post.likes}}
                    </v-card-actions>   
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
            return this.$store.state.loading
        }
    },
    methods:{
        ...mapActions(['fetchPosts', 'addLikePost']),
    }
}
</script>

<style scoped>
    .pointer{
        cursor: pointer
    }
</style>
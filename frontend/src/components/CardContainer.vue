<template>
    <v-card color="grey darken-3" class="pt-10 mt-10">
        <v-card
            v-for="post in posts"
            class="mx-auto my-2"
            max-width="500"
            :key="post.id"
            dark
            outlined
            raised
            >
            <div class="d-flex pa-4 align-center">
                <div class="d-flex align-center"><v-icon class="pointer pr-2">person</v-icon>{{post.username}}</div>
                <v-spacer/>
                <v-icon class="pointer">menu</v-icon>
            </div>
            
            <v-img
                :src="post.image"
            ></v-img>

            <v-card-title>{{post.title}}</v-card-title>

            <v-card-text class="d-flex align-center">
                <v-icon class="pointer pr-2">favorite_border</v-icon>{{post.likes}}
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Card-Container',
    methods:{
    },
    computed:{
        ...mapActions(['fetchPosts']),
        posts(){
            this.fetchPosts
            const {posts} = this.$store.state
            //set likeIcons
            return posts ? posts : []
        }
    }
}
</script>

<style scoped>
    .pointer{
        cursor: pointer
    }
</style>
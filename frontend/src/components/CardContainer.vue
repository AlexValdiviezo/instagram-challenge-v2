<template>
    <v-container>
        <v-row>
            <v-col cols="12" offset-md="1" order-md="1" md="10" offset-lg="3" order-lg="3" lg="6" offset-xl="4" order-xl="4" xl="4" class="align-center">
                <v-card
                    class="mx-auto my-3"
                    width="100%"
                    min-width="300"
                    outlined
                    raised
                    v-for="post in posts"
                    :key="post.id"
                    >
                    <v-card-actions class="pa-4">
                        <v-btn plain :to="{ name: 'profile', params: { username: post.username } }">
                            <v-avatar
                            v-if="post.username == username"
                            color="brown"
                            >
                                <span v-if="!avatar.includes('.jpg') && !avatar.includes('.png')" class="white--text text-h5">{{ username[0]+username[1] }}</span>
                                <v-img v-else :src="avatar"/>
                            </v-avatar>
                            <v-icon v-else>person</v-icon>
                            <v-card-text>{{post.username}}</v-card-text>
                        </v-btn>
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
            </v-col>
        </v-row>
        <v-overlay :value="loadingState">
            <v-progress-circular
                indeterminate
                size="100"
                color="primary"
                width=10
            ></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import CardMenu from './CardMenu.vue'

export default {
    props:{
        usernameProp:{
            type: String,
            required: false,
            default: undefined
        }
    },
    components: { CardMenu },
    name: 'Card-Container',
    mounted(){
        if(this.usernameProp != undefined) this.fetchPosts(this.usernameProp)
        else this.fetchPosts()
    },
    computed:{
        posts(){
            return this.$store.state.postModule.posts
        },
        loadingState(){
            return this.$store.state.loading
        },
        username(){
            return this.$store.state.userModule.username
        },
        avatar(){
            return this.$store.state.userModule.avatar
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
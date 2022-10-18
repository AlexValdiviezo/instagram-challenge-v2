<template>
    <v-col cols="12" offset-sm="1" sm="10" order-sm="1" offset-md="2" md="8" order-md="2" offset-lg="3" lg="6" order-lg="3" offset-xl="4" xl="4" order-xl="4">
        <v-card
            class="mx-auto my-3"
            outlined
            raised
            >
            <v-form class="ma-4" v-model="valid">
                <v-row class="ma-4 align-center">
                    <v-icon class="mr-4">person</v-icon>
                    <v-text-field
                        :disabled="!edit"
                        label="username"
                        v-model="post.username"
                        :rules="usernameRules"
                    ></v-text-field>
                    <v-btn
                        fab
                        small
                        @click="edit = !edit"
                        class="ml-4"
                    >   
                        <v-icon v-if="edit">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </v-row>
                <v-img
                    :src="post.image"
                    class="mb-8"
                    max-height="50vh"
                ></v-img>
                <v-text-field
                    :disabled="!edit"
                    label="url image"
                    v-model="post.image"
                    :rules="urlRules"
                ></v-text-field>
                <v-text-field
                    :disabled="!edit"
                    label="title"
                    v-model="post.title"
                    :rules="titleRules"
                ></v-text-field>
                <v-btn @click="updatePost()" block v-if="valid && edit">Update Post</v-btn>
            </v-form>
        </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex'
import baseProvider from '../providers/baseProvider'
export default {
    name: 'editPostView',
    data(){
        return{
            valid: false,
            edit: false,
            id: this.$route.params.id,
            post: {
                username: '',
                image: '',
                title: ''
            },
            usernameRules: [
                v => !v.includes(' ') || "username must not contain spaces",
                v => !!v || 'username is required.',
                v => (v.length>3) || 'username must be greater than 3 characters.',
                v => (v.length<=30) || 'max limit 15 characters.'
            ],
            urlRules: [
                v => !v.includes(' ') || "url must not contain spaces",
                v => v.includes('http://', 0) || v.includes('https://', 0) || "url must be a valid url",
                v => v.includes('.jpg', v.length - 4) ||
                     v.includes('.png', v.length - 4) ||
                     v.includes('.pneg', v.length - 5) ||
                     v.includes('.jpeg', v.length - 5) || 'url must be a valid url image'
            ],
            titleRules: [
                v => !!v || 'username is required.',
                v => (v.length>5) || 'username must be greater than 5 characters.',
                v => (v.length<=30) || 'max limit 30 characters.'
            ]
        }
    },
    created: async function(){
        const {data: {getOnePost: post}} = await baseProvider.getOnePost({id: this.id})
        this.post = post
    },
    methods:{
        ...mapMutations(['setEditPostOk', 'setEditPostError', 'setAlert', 'editPost']),
        updatePost: async function(){
            try{
                await baseProvider.updatePost({id:this.id, image: this.post.image, title: this.post.title, username: this.post.username})
                this.editPost({id:this.id, image: this.post.image, title: this.post.title, username: this.post.username})
                this.setEditPostOk(true)
                this.setAlert(true)
            }catch(error){
                this.setEditPostError(true)
                this.setAlert(true)
            }
        }
    }
}
</script>

<style>

</style>
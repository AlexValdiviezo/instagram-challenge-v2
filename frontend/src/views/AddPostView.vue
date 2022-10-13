<template>
    <v-main class="my-10 justify-center align-start">
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="6">
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    v-model="username"
                                    :rules="usernameRules"
                                    :counter="15"
                                    label="username"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    v-model="title"
                                    :rules="titleRules"
                                    :counter="30"
                                    label="title"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-text-field
                            v-model="image"
                            :rules="urlRules"
                            label="url image"
                            required
                        ></v-text-field>
                                        <v-btn v-if="valid" @click="uploadPost()" block>Add Post</v-btn>
                    </v-col>
                    <v-spacer/>
                    <v-col cols="12" sm="12" md="6">
                        <div class="d-flex justify-center text-h6">preview</div>
                        <v-card
                            class="mx-auto my-3"
                            max-width="500"
                            outlined
                            raised
                        >
                            <v-card-actions class="pa-4">
                                <v-layout align-center justify-start class="pointer">
                                <v-icon>person</v-icon>
                                <v-card-text>{{username}}</v-card-text>
                                </v-layout>
                                <v-spacer />
                                <v-icon>menu</v-icon>
                            </v-card-actions>
                            
                            <v-img
                                :src="image"
                            ></v-img>

                            <v-card-title>{{title}}</v-card-title>
                            <div class="px-3"><v-divider/></div>
                            <v-card-actions class="pa-4">
                                <v-icon left class="pointer">favorite_border</v-icon>0
                            </v-card-actions>   
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-main>
</template>

<script>
import { mapMutations } from 'vuex'
import baseprovider from '../providers/baseProvider'

export default {
    data(){
        return{
            valid: false,
            username: '',
            title: '',
            image: '',
            usernameRules: [
                v => !v.includes(' ') || "username must not contain spaces",
                v => !!v || 'username is required.',
                v => (v.length>3) || 'username must be greater than 3 characters.',
                v => (v.length<=15) || 'max limit 15 characters.'
            ],
            titleRules: [
                v => !!v || 'username is required.',
                v => (v.length>5) || 'username must be greater than 5 characters.',
                v => (v.length<=30) || 'max limit 30 characters.'
            ],
            urlRules: [
                v => !v.includes(' ') || "url must not contain spaces",
                v => v.includes('http://', 0) || v.includes('https://', 0) || "url must be a valid url",
                v => v.includes('.jpg', v.length - 4) ||
                     v.includes('.png', v.length - 4) ||
                     v.includes('.pneg', v.length - 5) ||
                     v.includes('.jpeg', v.length - 5) || 'url must be a valid url image'
            ]
        }
    },
    methods:{
        ...mapMutations(['setAddPostOk', 'setAddPostError', 'setAlert', 'addPost']),
        uploadPost: async function(){
            try{
                const {data: {createPost: {id, likes}}} = await baseprovider.uploadPost({title: this.title, image: this.image, username: this.username})
                this.addPost({id, likes, title: this.title, image: this.image, username: this.username})
                this.setAddPostOk(true)
                this.setAlert(true)
            }catch(error){
                console.log(error)
                this.setAddPostError(true)
                this.setAlert(true)
            }
        }
    }
}
</script>
<template>
    <v-main class="my-10 justify-center align-start">
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                    <v-text-field
                        v-model="username"
                        :rules="usernameRules"
                        :counter="15"
                        label="username"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                    <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="30"
                        label="title"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                        cols="12"
                        md="12"
                    >
                    <v-text-field
                        v-model="image"
                        :rules="urlRules"
                        label="url image"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn v-if="valid" @click="uploadPost()" block>Add Post</v-btn>
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
        ...mapMutations(['setAddPostOk', 'setAddPostError', 'setAlert']),
        uploadPost: async function(){
            try{
                await baseprovider.uploadPost({title: this.title, image: this.image, username: this.username})
                this.setAddPostOk(true)
                this.setAlert(true)
            }catch(error){
                this.setAddPostError(true)
                this.setAlert(true)
            }
        }
    }
}
</script>
<template>
    <v-form v-model="valid" class="py-auto">
        <v-row>
            <v-col cols="6">
                <v-text-field
                    disabled
                    :label="username"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    @change = "$emit('titleChange', title)"
                    v-model="title"
                    :rules="titleRules"
                    :counter="30"
                    label="title"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-text-field
            @change = "$emit('imageChange', image)"
            v-model="image"
            :rules="urlRules"
            label="url image"
            required
        ></v-text-field>
        <v-btn v-if="valid" @click="uploadPost()" block>Add Post</v-btn>
    </v-form>
</template>

<script>
import { mapMutations } from 'vuex'
import baseProvider from '../providers/baseProvider'
export default {
    data(){
        return{
            valid: false,
            title: '',
            image: '', 
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
            ],
        }
    },
    computed:{
        username(){
            return this.$store.state.userModule.username
        }
    },
    methods:{
        ...mapMutations(['setAddPostOk', 'setAddPostError', 'setAlert', 'addPost']),
        uploadPost: async function(){
            try{
                const {data: {createPost: {id, likes}}} = await baseProvider.uploadPost({title: this.title, image: this.image, username: this.username})
                this.addPost({id, likes, title: this.title, image: this.image, username: this.username})
                this.setAddPostOk(true)
                this.setAlert(true)
                this.$router.push('/home')
            }catch(error){
                console.log(error)
                this.setAddPostError(true)  
                this.setAlert(true)
            }
        }
    }
}
</script>

<style>

</style>
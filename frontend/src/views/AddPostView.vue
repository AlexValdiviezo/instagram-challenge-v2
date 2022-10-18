<template>
    <v-container class="mt-10">
        <v-card class="pa-10">
            <p class="text-h4 text-center">Add Post</p>
            <v-divider/>
            <v-row class="pa-4">
            <v-col cols="12" sm="12" md="6">
                <add-post-form @imageChange = "imageChange" @titleChange = "titleChange"  />
            </v-col>
                <v-spacer/>
                <add-post-preview :username="username" :avatar="avatar" :title="title" :image="image"/>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import AddPostForm from '../components/AddPostForm.vue'
import AddPostPreview from '../components/AddPostPreview.vue'

export default {
  components: { AddPostForm, AddPostPreview },
    name: 'AddPostView',
    data(){
        return{
            valid: false,
            title: '',
            image: ''
        }
    },
    computed:{
        username(){
            return this.$store.state.userModule.username
        },
        avatar(){
            return this.$store.state.userModule.avatar
        }
    },
    created(){
        if(this.$store.state.userModule.username.length<=0){
            this.setUsernameIsEmpty(true)
            this.setAlert(true)
            this.$router.push('/home')
        }
    },
    methods:{
        ...mapMutations(['setUsernameIsEmpty', 'setAlert']),
        titleChange(value){
            this.title = value
            console.log(this.title)
        },
        imageChange(value){
            this.image = value
            console.log(this.image)
        }
    }
}
</script>
<template>
  <card-container :usernameProp="username"/>
</template>

<script>
import { mapMutations } from 'vuex'
import CardContainer from '../components/CardContainer.vue'
export default {
    components: { CardContainer },
    data(){
        return{
            username: ''
        }
    },
    methods:{
        ...mapMutations(['setUsernameIsEmpty', 'setAlert']),
    },
    created(){
        if(this.$store.state.userModule.username.length>0) this.username = this.$store.state.userModule.username
        else{
            this.setUsernameIsEmpty(true)
            this.setAlert(true)
            this.$router.push('/home')
        }
    }
}
</script>

<style>

</style>
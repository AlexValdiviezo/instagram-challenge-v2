<template>
    <v-btn :to="route" @click="clicked" text width="100%" color="blue">editar publicación</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'EditCardComponent',
    props:{
        id: {type: String, required: true}
    },
    data(){
        return{
            route:{
                name: 'editPost',
                params: {
                    id: this.id
                }
            }
        }
    },
    methods:{
        ...mapActions(['editPost']),
        clicked(){
            console.log(this.route)
        }
    }
}
</script>

<style>

</style>
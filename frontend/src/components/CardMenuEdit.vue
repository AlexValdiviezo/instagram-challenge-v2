<template>
  <v-btn @click="clicked" text width="100%" color="blue">editar publicación</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'EditCardComponent',
    props:{
        id: {type: String, required: true}
    },
    methods:{
        ...mapActions(['editPost']),
        clicked(){
            
        }
    }
}
</script>

<style>

</style>
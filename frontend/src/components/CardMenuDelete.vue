<template>
  <v-btn @click="clicked" text width="100%" color="red">borrar publicación</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'DeleteCardComponent',
    props:{
        id: {type: String, required: true}
    },
    methods:{
        ...mapActions(['deletePost']),
        clicked(){
            this.deletePost(this.id)
            this.$emit('deleted')
        }
    }
}
</script>

<style>
</style>
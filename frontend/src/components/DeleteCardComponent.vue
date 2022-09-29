<template>
  <v-btn @click="clicked" text width="100%" color="red">Eliminar Publicación</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'DeleteCardComponent',
    props:{
        id: String
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
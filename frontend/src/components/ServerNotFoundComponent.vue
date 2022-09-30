<template>
  <v-dialog v-model="dialog">
    <v-card color="error" class="d-flex flex-column align-center py-4">
        <v-card-text class="text-h5 text-center">Perdida de conexión con el servidor, ¿Desea reintentar denuevo?</v-card-text>
        <v-btn @click="reloadPage">reintentar</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name:'ServerNotFoundComponent',
    data(){
        return{
            dialog: true
        }
    },
    methods:{
        reloadPage(){
            window.location.reload()
        }
    }
}
</script>

<style>

</style>
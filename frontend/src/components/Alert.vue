<template>
    <v-snackbar
        v-model="snackbar"
        color="rgba(0,0,0,0)"
        elevation="0"
        :timeout="timeout"
    >
        <v-alert
            :type="type"
        >
        {{text}}
        </v-alert>
    </v-snackbar>
</template>

<script>
export default {
    name:'AlertComponent',
    data(){
        return{
            timer: 3,
            snackbar: true,
            timeout: 7500
        }
    },
    mounted(){
        for(let i = 1000; i<10000; i+=1000){
            setTimeout(()=>{
                this.timer --
            }, i)
        }
    },
    computed:{
        text(){
            if(this.$store.state.alertModule.usernameIsEmpty) return 'Esta sección requiere de un username, configurelo en menu->profile'
            if(this.$store.state.alertModule.deleteOk) return 'Se ha eliminado la publicación'
            if(this.$store.state.alertModule.deleteError) return 'Ha ocurrido un error al eliminar la publicación'
            if(this.$store.state.alertModule.serverConnectError) return `No se pudo conectar con el servidor, reintentando nuevamente en ${this.timer}`
            if(this.$store.state.alertModule.addPostOk) return `Se ha añadido con exito una nueva publicación`
            if(this.$store.state.alertModule.addPostError) return `No se ha podido añadir una nueva publicación, reintentar mas tarde.`
            if(this.$store.state.alertModule.editPostOk) return `Se ha editado con exito la publicación`
            if(this.$store.state.alertModule.editPostError) return `No se ha podido editar la publicación, reintentar mas tarde.`
            return 'alert'
        },
        type(){
            if(this.$store.state.alertModule.usernameIsEmpty) return 'error'
            if(this.$store.state.alertModule.deleteError) return 'error'
            if(this.$store.state.alertModule.deleteOk) return 'success'
            if(this.$store.state.alertModule.serverConnectError) return 'warning'
            if(this.$store.state.alertModule.addPostOk) return `success`
            if(this.$store.state.alertModule.addPostError) return `error`
            if(this.$store.state.alertModule.editPostOk) return `success`
            if(this.$store.state.alertModule.editPostError) return `error`
            return 'success'
        }
    }
}
</script>

<style>

</style>
<template>
    <v-snackbar
        v-model="snackbar"
        color="rgba(0,0,0,0)"
        :timeout="2500"
        elevation="0"
    >
                <v-alert
                type="success"
                v-bind="attrs"
                @click="snackbar = false"
                dismissible
            >
            {{text}}
            </v-alert>

    </v-snackbar>
</template>

<script>
export default {
    name:'AlertComponent',
    computed:{
        text(){
            if(this.$store.state.alertModule.deleteOk) return 'Se ha eliminado la publicación'
            if(this.$store.state.alertModule.deleteError) return 'Ha ocurrido un error al eliminar la publicación'
            return 'alert'
        },
        snackbar(){
            return this.$store.state.alertModule.alert
        }
    }
}
</script>

<style>

</style>
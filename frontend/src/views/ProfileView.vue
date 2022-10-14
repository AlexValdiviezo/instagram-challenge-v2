<template>
    <v-container fluid class="py-10 my-10">
        <v-card class="mx-auto pa-5" max-width="800" min-height="80vh">
            <v-layout align-center class="pb-4">
                <v-avatar color="blue" min-width="100" min-height="100" width="auto" height="auto">
                    <v-icon size="70">person</v-icon>
                </v-avatar>
                <v-card-text class="title">
                    {{username}}
                </v-card-text>
            </v-layout>
            <v-divider />
            <v-card-text>Coming soon: {{username}}'s posts </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name:'ProfileView',  
    data(){
        return{
            username: this.$route.params.username
        }
    },
    mounted(){
        //todo GetPosts By username
    }
}
</script>

<style>

</style>
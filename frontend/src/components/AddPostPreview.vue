<template>
    <v-col cols="12" sm="12" md="6">
        <div class="d-flex justify-center text-h6">preview</div>
        <v-card
            class="mx-auto my-3"
            max-width="500"
            outlined
            raised
        >
            <v-card-actions class="pa-4">
                <v-layout align-center justify-start class="pointer">
                    <v-avatar
                    v-if="!!username"
                    color="brown"
                    >
                        <span v-if="!avatar.includes('.jpg') && !avatar.includes('.png')" class="white--text text-h5">{{ username[0]+username[1] }}</span>
                        <v-img v-else :src="avatar"/>
                    </v-avatar>
                    <v-card-text>{{username}}</v-card-text>
                </v-layout>
                <v-spacer />
                <v-icon>menu</v-icon>
            </v-card-actions>
            
            <v-img
                :src="image"
            ></v-img>

            <v-card-title>{{title}}</v-card-title>
            <div class="px-3"><v-divider/></div>
            <v-card-actions class="pa-4">
                <v-icon left class="pointer">favorite_border</v-icon>0
            </v-card-actions>   
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
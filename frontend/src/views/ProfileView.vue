<template>
    <v-container fluid class="py-10 my-10">
        <v-card class="mx-auto pa-10" max-width="800">
            <v-row>
            <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="username"
                required
            ></v-text-field>
            <v-menu
                bottom
                min-width="200px"
                rounded
                offset-y
            >
                <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    x-large
                    v-on="on"
                >
                    <v-avatar
                    size="56"
                    color="brown"
                    >
                        <span v-if="!avatar.includes('.jpg') && !avatar.includes('.png')" class="white--text text-h5">{{ username[0]+username[1] }}</span>
                        <v-img v-else :src="avatar"/>
                    </v-avatar>
                </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto my-4 text-center">
                        <v-btn icon @click="setImageAvatar(username[0]+username[1])">
                            <v-avatar
                                size="56"
                                color="brown"
                            >
                                <span class="white--text text-h5">{{ username[0]+username[1] }}</span>
                            </v-avatar>
                        </v-btn>
                        </div>
                        <div class="mx-auto my-4 text-center" v-for="(avatar, index) of avatars" v-bind:key="index">
                        <v-btn icon @click="setImageAvatar('/avatars/'+avatar+'.jpg')">
                            <v-avatar
                                size="56"
                                color="blue"
                            >
                                <v-img :src="`/avatars/${avatar}.jpg`"/>
                            </v-avatar>
                        </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
            </v-row>
            <br>
            <v-card-actions>
                <v-btn v-if="username.length>1" block to="/home">Actualizar Información</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'ProfileView',  
    data(){
        return{
            avatarImage: '',
            avatars: ['homer','marge','bart','lisa','magui'],
            value: false,
            usernameRules: [
                value => !!value || 'Este campo no puede estar vacio',
                value => value.length > 3 || 'El nombre de usuario debe ser mayor a 3 letras',
                value => !value.split('').includes(' ') || 'El nombre de usuario no debe contener espacios'
            ]
        }
    },
    methods:{
        ...mapMutations(['setUsername', 'setAvatar']),
        setImageAvatar(value){
            this.setAvatar(value)
        }
    },
    computed:{
        username:{
            get(){
                return this.$store.state.userModule.username
            },
            set(value){
                this.setUsername(value)
            }
        },
        avatar: {
            get(){
                return this.$store.state.userModule.avatar
            }
        }
    }
}
</script>

<style>

</style>
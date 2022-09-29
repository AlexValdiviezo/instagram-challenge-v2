<template>
  <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            icon
            v-bind="attrs"
            v-on="on"
        >
          <slot></slot>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2 text-center">
          ¿Qué desea hacer con la publicación?
        </v-card-title>
        <v-card-actions class="d-flex flex-column">
            <v-btn text width="100%" color="primary">Editar Publicación</v-btn>
            <v-divider></v-divider>
            <delete-card-component :id="post.id" @deleted="cardDelete"/>
            <v-divider></v-divider>
            <v-btn
                width="100%"
                color="secondary"
                text
                @click="dialog = false"
            >
                Cancelar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import DeleteCardComponent from './DeleteCardComponent.vue'
export default {
  components: { DeleteCardComponent },
    name:'CardMenuComponent',
    props:{
        post: Object
    },
    data(){
        return{
            dialog: false
        }
    },
    methods:{
        cardDelete(){
            this.dialog = false
            this.$emit('cardDelete')
        }
    }
}
</script>

<style>

</style>
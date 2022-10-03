<template>
  <v-menu offset-overflow offset-x right transition="slide-x-transition">
    <template v-slot:activator="{on, attrs}">
      <v-icon class="pointer" v-on="on" v-bind="attrs">menu</v-icon>
    </template>
    <v-list>
      <v-list-item>
        <delete-card :id="post.id"/>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import DeleteCard from './DeleteCard.vue'
export default {
  components: { DeleteCard },
    name:'CardMenu',
    props:{
        post: {type: Object, required: true}
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
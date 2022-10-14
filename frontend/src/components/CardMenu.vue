<template>
  <v-menu offset-overflow right offset-x transition="slide-x-transition" light>
    <template v-slot:activator="{on, attrs}">
      <v-icon class="pointer" v-on="on" v-bind="attrs">menu</v-icon>
    </template>
    <v-list>
      <v-list-item>
        <card-menu-edit :id="post.id"/>
      </v-list-item>
      <v-list-item>
        <delete-card :id="post.id"/>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import DeleteCard from './CardMenuDelete.vue'
import CardMenuEdit from './CardMenuEdit.vue'


export default {
  components: { DeleteCard, CardMenuEdit },
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
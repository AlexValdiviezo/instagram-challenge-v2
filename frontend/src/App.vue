<template>
  <div id="app"> 
    <div v-for="(post, index) in posts" :key="index"> 
      <p>{{post.username}}</p>
      <img :src="`${post.image}`" />
      <span>likes: {{post.likes}}</span>
      <p>{{post.title}}</p>
    </div>
    <button @click="callBack">Hacer llamdo</button> 
  </div>
</template>

<script>
import axios from 'axios'

// TODO: hacer el llamado cuando se renderiza el componente useEffect({}, [])

export default {
  
  name: 'App',
  components: {
  },
  data() {
    return {
      posts: null
    }
  },
  methods: {
    callBack() {
      axios.get('http://localhost:4001/api/post')
      .then((res) => {
        this.posts = res.data.posts
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>

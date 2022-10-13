import baseProvider from '@/providers/baseProvider'
import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/AlertModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    isMenuOpen: false,
    loading: false
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts
    },
    addPost(state, post){
      state.posts.unshift(post)
    },
    changeIsMenuOpen(state, payload){
      state.isMenuOpen = payload
    },
    setLoading(state, payload){
      state.loading = payload
    },
    deletePost(state, id){
      state.posts.map((post,index) => {
        if(post.id == id) state.posts.splice(index, 1)
      })
      return 0
    },
    addLikePost(state, id){
      state.posts.map((post, index) => {
        if(post.id == id) state.posts[index].likes += 1
      })
    },
    editPost(state, updatePost){
      state.posts.map((post, index) => {
        if(post.id === updatePost.id){
          state.posts[index].username = updatePost.username
          state.posts[index].title = updatePost.title
          state.posts[index].image = updatePost.image
        }
      })
    }
  },
  actions: {
    fetchPosts: async({commit}) => {
      commit('setLoading', true)
        try {
          const posts = await baseProvider.getAllPosts()
          commit('setLoading', false)
          commit('setPosts', posts)
        } catch (error) {
          commit('setAlert', true)
          commit('setServerConnectError', true)
          setTimeout(async ()=>{
            try {
              const posts = await baseProvider.getAllPosts()
              commit('setLoading', false)
              commit('setPosts', posts)
            } catch (error) {
                commit('setAlert', true)
                commit('setServerConnectError', true)
                setTimeout(async ()=>{
                  try {
                    const posts = await baseProvider.getAllPosts()
                    commit('setLoading', false)
                    commit('setPosts', posts)
                  } catch (error) {
                    commit('setAlert', true)
                    commit('setServerConnectError', true)
                    setTimeout(()=>{
                      commit('setServerNotFound', true)
                    }, 3000)
                  }
                }, 3000)
              }
          }, 3000)
        }
    },
    deletePost: async({commit}, id) => {
      commit('setLoading', true)
      try {
        await baseProvider.deletePost(id)
        setTimeout(() => {
          commit('setLoading', false)
          commit('deletePost', id)
          commit('setAlert', true)
          commit('setDeleteOk', true)
        }, 1000)
      } catch (error) {
        setTimeout(() => {
          commit('setLoading', false)
          commit('setAlert', true)
          commit('setDeleteError', true)
        }, 1000)
      }

    },
    addLikePost: async({commit}, id) => {
      try {
        await baseProvider.addLike(id)
        commit('addLikePost', id)
      }catch(error){
        console.log('error al añadir un like: ' + error)
      }
    },
    changeIsMenuOpen: ({commit}, payload) => {
      commit('changeIsMenuOpen', payload)
    },
  },
  modules: {
    alertModule: alert
  }
})

import baseProvider from '@/providers/baseProvider'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    isMenuOpen: false
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts
    },
    changeIsMenuOpen(state, payload){
      state.isMenuOpen = payload
    }
  },
  actions: {
    fetchPosts: async({commit}) => {
      const {data: {getAllPosts: posts}} = await baseProvider.getAllPosts()
      commit('setPosts', posts)
    },
    changeIsMenuOpen: ({commit}, payload) => {
      commit('changeIsMenuOpen', payload)
    }
  },
  modules: {
  }
})

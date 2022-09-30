import baseProvider from '@/providers/baseProvider'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const alert={
  state:{
    alert: false,
    deleteOk: false,
    deleteError: false
  },
  mutations:{
    setDeleteOk(state, payload){
      state.deleteOk = payload
    },
    setDeleteError(state, payload){
      state.deleteError = payload
    },
    setAlert(state, payload){
      state.alert = payload
    }
  }
}

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
    }
  },
  actions: {
    fetchPosts: async({commit}) => {
      commit('setLoading', true)
      const {data: {getAllPosts: posts}} = await baseProvider.getAllPosts()
      setTimeout(() => {
        commit('setLoading', false)
        commit('setPosts', posts)
      }, 500);
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
          setTimeout(() => {
            commit('setAlert', false)
            commit('setDeleteOk', false)
          }, 2500)
        }, 500)
      } catch (error) {
        setTimeout(() => {
          commit('setLoading', false)
          commit('setAlert', true)
          commit('setDeleteError', true)
          setTimeout(() => {
            commit('setAlert', false)
            commit('setDeleteError', false)
          }, 2500)
        }, 500)
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

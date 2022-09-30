import baseProvider from '@/providers/baseProvider'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const alert={
  state:{
    alert: false,
    deleteOk: false,
    deleteError: false,
    serverConnectError: false,
    serverNotFound: false
  },
  mutations:{
    setDeleteOk(state, payload){
      if(payload && !state.deleteOk) {
        state.deleteOk = payload
        setTimeout(() => {
          state.deleteOk = false
        }, 2600)
        return
      }
    },
    setDeleteError(state, payload){
      if(payload && !state.deleteError) {
        state.deleteError = payload
        setTimeout(() => {
          state.deleteError = false
        }, 2600)
        return
      }
    },
    setAlert(state, payload){
      if(payload && !state.alert) {
        state.alert = payload
        setTimeout(() => {
          state.alert = false
        }, 2600)
        return
      }
    },
    setServerConnectError(state, payload){
      if(payload && !state.serverConnectError) {
        state.serverConnectError = payload
        setTimeout(() => {
          state.serverConnectError = false
        }, 2600)
        return
      }
    },
    setServerNotFound(state, payload){
      state.serverNotFound = payload
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
        try {
          const {data: {getAllPosts: posts}} = await baseProvider.getAllPosts()
          commit('setLoading', false)
          commit('setPosts', posts)
        } catch (error) {
          commit('setAlert', true)
          commit('setServerConnectError', true)
          setTimeout(async ()=>{
            try {
              const {data: {getAllPosts: posts}} = await baseProvider.getAllPosts()
              commit('setLoading', false)
              commit('setPosts', posts)
            } catch (error) {
                commit('setAlert', true)
                commit('setServerConnectError', true)
                setTimeout(async ()=>{
                  try {
                    const {data: {getAllPosts: posts}} = await baseProvider.getAllPosts()
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
        }, 500)
      } catch (error) {
        setTimeout(() => {
          commit('setLoading', false)
          commit('setAlert', true)
          commit('setDeleteError', true)
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

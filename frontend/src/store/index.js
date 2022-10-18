import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/AlertModule'
import user from './modules/UserModule'
import post from './modules/PostModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false,
  },
  getters: {

  },
  mutations: {
    addPost(state, post){
      state.posts.unshift(post)
    },
    setLoading(state, payload){
      state.loading = payload
    }
  },
  actions:{

  },
  modules: {
    alertModule: alert,
    userModule: user,
    postModule: post
  }
})

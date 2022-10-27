import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/AlertModule'
import user from './modules/UserModule'
import post from './modules/PostModule'
import createPersistedState from "vuex-persistedstate";
import themeModule from './modules/ThemeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false,
  },
  plugins: [createPersistedState({
    paths:['userModule', 'themeModule']
  })],
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
    postModule: post,
    themeModule
  }
})

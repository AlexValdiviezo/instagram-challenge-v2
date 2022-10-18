import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddPostView from '../views/AddPostView.vue'
import EditPostView from '../views/EditPostView.vue'
import MyPosts from '../views/MyPosts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/add-post',
    name: 'addPost',
    component: AddPostView
  },
  {
    path: '/my-posts',
    name: 'myPosts',
    component: MyPosts
  },
  {
    path: '/edit-post/:id',
    name: 'editPost',
    component: EditPostView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

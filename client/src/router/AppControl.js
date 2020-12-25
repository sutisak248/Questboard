// import login from '../components/login.vue'
import signup from '../components/signup.vue'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  


  // { path: '/profile', component: profile },
  { path: '/signup', component: signup }
]
const router = new VueRouter({routes})

export default router;
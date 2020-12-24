import login from '../components/login.vue'
import hello from '../components/HelloWorld.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: hello },
  { path: '/login', component: login }
]
const router = new VueRouter({routes})

export default router;
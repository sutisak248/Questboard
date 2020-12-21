import Vue from 'vue'
import App from './App.vue'
import router from './router/AppControl'

Vue.config.productionTip = false
Vue.config.silent=false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

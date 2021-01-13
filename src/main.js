import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import router from './router'

import './main.css'


Vue.config.productionTip = false

Vue.use(VueTailwind)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

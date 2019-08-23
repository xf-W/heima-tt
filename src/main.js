import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// 引入 element-ui 三个步骤
import ElementUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$http = axios
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

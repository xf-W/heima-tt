import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
import Error_ from '@/views/404'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/',
      component: home,
      children: [
        { path: '/', component: welcome }
      ] },
    { path: '*', component: Error_ }
  ]
})
export default router

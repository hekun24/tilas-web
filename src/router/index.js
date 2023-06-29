import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/emp',
      name: 'emp',
      component: () => import("../views/emp/EmpView.vue")
    },
    {
      path:'/',
      name: 'app',
      component:() => import("../components/LoginView.vue")
    }
  ]
})



export default router

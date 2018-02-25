import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    }
  ]
})

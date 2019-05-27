import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import home from '@/components/home'
// import navbar from '@/components/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shoppingList',
      name: 'list',
      component: list
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

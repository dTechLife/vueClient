import Vue from 'vue'
import Router from 'vue-router'
import shoppinglist from '@/components/shoppinglist'
import home from '@/components/home'
import cookbook from '@/components/cookbook'
import calendar from '@/components/calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shoppingList',
      name: 'shoppinglist',
      component: shoppinglist
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/cookbook',
      name: 'cookbook',
      component: cookbook
    }
  ]
})

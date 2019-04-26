import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Books from '../pages/Books'
import Broadcasts from '../pages/Broadcasts'
import Groups from '../pages/Groups'
import Activity from '../pages/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/broadcasts',
      name: 'Broadcasts',
      component: Broadcasts
    },
    {
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/activity/:id',
      name: 'Activity',
      component: Activity
    }
  ]
})

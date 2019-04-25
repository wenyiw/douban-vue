import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Movies from '../views/Movies'
import Books from '../views/Books'
import Broadcasts from '../views/Broadcasts'
import Groups from '../views/Groups'

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
    }
  ]
})

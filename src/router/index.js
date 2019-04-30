import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Books from '../pages/Books'
import Broadcasts from '../pages/Broadcasts'
import Groups from '../pages/Groups'
import Activity from '../pages/Activity'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Subject from '../pages/Subject'
import Search from '../pages/Search'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/:classify/subject/:id',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})

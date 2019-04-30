import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import subject from './modules/subject'
import movies from './modules/movies'
import books from './modules/books'
import user from './modules/user'
import group from './modules/group'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    subject,
    movies,
    books,
    user,
    group,
    search
  }
})

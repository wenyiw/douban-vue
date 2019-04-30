<template>
  <div class="movie-view has-header">
    <scroller title="Popular" type="hasCover" :items="popularMovies"></scroller>
    <scroller title="Free" type="hasCover" :items="freeMovies"></scroller>
    <scroller title="New" type="hasCover" :items="newMovies"></scroller>
    <scroller title="Discover" type="onlyString" :items="movieTags"></scroller>
    <types></types>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import Scroller from '../components/Scroller'
import Types from '../components/Types'

export default {
  name: 'movie-view',
  components: {Scroller, Types},
  computed: {
    ...mapState({
      popularMovies: state => state.movies.popularMovies,
      freeMovies: state => state.movies.freeMovies,
      newMovies: state => state.movies.newMovies,
      movieTags: state => state.movies.movieTags
    })
  },
  created () {
    this.$store.dispatch('getMovie')
  }
}
</script>

<style lang="scss" scoped>
</style>

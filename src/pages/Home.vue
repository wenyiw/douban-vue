<template>
  <div class="home-view has-header">
    <Activities mold="thumbnail"></Activities>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>

import Activities from '../components/Activities'
import InfiniteLoading from 'vue-infinite-loading'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: {Activities, InfiniteLoading, Loading},
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('loadMore')
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>

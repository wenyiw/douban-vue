<template>
  <div class="status has-header">
    <user></user>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">more</a>
    </div>
  </div>
</template>

<script>
import User from '../components/User'
import Card from '../components/Card'

export default {
  name: 'status',
  components: {User, Card},
  data () {
    return {
      items: new Array(10)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>

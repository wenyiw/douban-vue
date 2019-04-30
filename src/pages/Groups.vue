<template>
  <div class="home-view has-header">
    <user></user>
    <group title="Rental" :items="rental">
      <a class="list-link" href="#" slot="more">More</a>
    </group>
    <group title="Chat" :items="chat">
      <a class="list-link" href="#" slot="more">More</a>
    </group>
    <group title="Buy" :items="buy">
      <a class="list-link" href="#" slot="more">More</a>
    </group>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import User from '../components/User'
import Group from '../components/Group'

export default {
  name: 'broadcasts-view',
  components: {User, Group},
  computed: {
    // Getting Vuex State from store/modules/group
    ...mapState({
      rental: state => state.group.rental,
      chat: state => state.group.chat,
      buy: state => state.group.buy
    })
  },
  created: function () {
    // Dispatching getGroup on created
    this.$store.dispatch('getGroup')
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}

.user-bar {
  margin-bottom: 1.5rem;
}
</style>

import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  events: [],
  temp: [],
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    state.events = state.events.concat(payload.res)
  }
}

const actions = {
  loadMore ({commit, state}) {
    request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' + 'count=3')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadMore',
            res: res.body.events
          })
        }
      })
  }
}

export default {
  state,
  mutations,
  actions
}

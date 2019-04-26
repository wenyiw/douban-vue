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
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
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
  },
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.douban.com/v2/event/' + payload.id)
        .use(jsonp)
        .end((err, res) => {
          if (!err) {
            commit({
              type: 'getSingleEvent',
              res: res.body
            })
            resolve(res)
          }
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}

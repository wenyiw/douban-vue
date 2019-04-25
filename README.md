Day 1
  Step 1
    Link vue object to #app
      App.vue and main.js
  Step 2
    header guides and routers
      App.vue: router-view
      main.js: import router
      HeaderGuide.vue: router-links
      router/index.js: define routers from views
      views/: code (placeholder for now) for each router-view
  Step 3
    implement actual router views
    views/Home.vue
      in mounted, dispatch actions to get data from api
      note: ad-blocker may block calls (net::ERR_BLOCKED_BY_CLIENT)
    components/Activities.vue
      get activities from the store
    vuex
      main.js: import vuex
      store/index.js: export modules
      store/modules: 
        .js: define states, mutations, actions


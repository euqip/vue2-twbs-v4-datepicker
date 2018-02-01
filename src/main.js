"use strict"

import Vue from 'vue'
import VueI18Next from "./i18next.js"
import App from './App.vue'
Vue.use(VueI18Next, (i18next) => {

  new Vue({
    el: '#app',
    render: h => h(App)
  })
})

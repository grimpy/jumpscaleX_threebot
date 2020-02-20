import Vuex from '../web_modules/vuex/dist/vuex.esm.browser.js'
import Vue from '../web_modules/vue/dist/vue.js'

import appStore from './app.js'
import mainStore from './main.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      appStore,
      mainStore
  }
})

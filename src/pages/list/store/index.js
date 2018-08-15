import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsername from './modules/module-username'
import moduleDate from './modules/module-date'
import moduleUserImg from './modules/module-userimg'
import moduleContent from './modules/module-content'
import moduleUserBg from './modules/modules-userbg'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleUsername,
    moduleDate,
    moduleUserImg,
    moduleContent,
    moduleUserBg
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import moduleImg from './modules/module-bgimg'
import moduleCode from './modules/modules-code'
import moduleLogo from './modules/module-logo'
import moduleTitle from './modules/module-title'
import moduleTop from './modules/module-topcolor'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleImg,
    moduleCode,
    moduleLogo,
    moduleTitle,
    moduleTop
  }
})

export default store

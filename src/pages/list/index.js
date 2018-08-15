import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')

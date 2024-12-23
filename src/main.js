import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './permission' // permission control
import './utils/error-log' // error log
import Prototype from '@/utils/prototype'
import CustomComponents from '@/components/Icons/index.js'

Vue.use(Prototype)

Object.keys(CustomComponents).forEach((key) => Vue.use(CustomComponents[key]))

Vue.use(Element, {
  size: Cookies.get('size') || 'small', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App)
})

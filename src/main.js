// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import Vconsole from 'vconsole'
import VueTouch from 'vue-touch'
require('./util/mock')
//vuex
Vue.use(Vuex)
//axios
Vue.prototype.$http = axios;
//lazyload
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './static/img/github.png',
  loading: './static/img/github.png',
  attempt: 1
})
//解决移动端点击事件200ms延迟
fastclick.attach(document.body)
//vconsole
let vConsole = new Vconsole()
export default vConsole
//vue-touch@next
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = { //配置滑动区域为左滑动，解决和滚动事件的冲突
  direction: 'horizontal',
  threshold: 200
}
//vuex开启开发环境日志
Vue.config.productionTip = false
const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

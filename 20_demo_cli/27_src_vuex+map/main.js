import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  store: store,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  }
})


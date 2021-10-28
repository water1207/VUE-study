import Vue from 'vue'
import App from './App.vue'
// import {mixin, mixin2} from "./mixin";

Vue.config.productionTip = false
// Vue.mixin(mixin)
// Vue.mixin(mixin2)

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  }
  // render(createElement) {
  //   return createElement('h1', 'hello');
  // },
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

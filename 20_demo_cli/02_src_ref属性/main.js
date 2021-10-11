import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
  // render(createElement) {
  //   return createElement('h1', 'hello');
  // },
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

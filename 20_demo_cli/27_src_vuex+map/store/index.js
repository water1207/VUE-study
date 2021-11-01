//该文件用于创建vuex最核心的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//action 用于响应组件中的动作
//业务逻辑在这里
const actions = {
  add(context, value) {
    context.commit('ADD', value)
  }
}
//mutations 用于操作数据(state)
const mutations = {
  ADD(state, value) {
    state.sum += value
  }
}
//state 用于存储数据
const state = {
  sum: 0,
  name: 'Gary',
  sex: 'Man'
}
//准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum*10
  }
}

//创建store
//export default new Vuex.store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

export default store
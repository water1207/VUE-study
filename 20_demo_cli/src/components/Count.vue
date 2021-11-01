<template>
  <div>
    <h1>当前求和为: {{$store.state.sum}}</h1>
    <h2>当前name为: {{name}}</h2>
    <h2>当前sex为: {{sex}}</h2>
<!--    <h2>当前求和放大10倍为: {{$store.getters.bigSum}}</h2>-->
    <h2>当前求和放大10倍为: {{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">wait +</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: "Count",
    data() {
      return {
        n: 1,
      }
    },
    computed: {
      //借助mapState生成计算属性，从state中读取数据(对象写法)
      //...mapState({name:'name', sex: 'sex'}),
      //数组写法
      ...mapState(['name', 'sex']),
      ...mapGetters(['bigSum'])
    },
    methods: {
      ...mapActions({increment: 'add'}),
      // ...mapMutations({increment: 'ADD'}),
      // increment() {
      //   this.$store.commit('ADD', this.n)  //没有特殊业务逻辑 直接略过action
      //   //this.$store.dispatch('add', this.n)
      // },
      decrement() {

      },
      incrementOdd() {

      },
      incrementWait() {
        setTimeout(() => {

        },500)
      }
    }
  }
</script>

<style scoped>

</style>
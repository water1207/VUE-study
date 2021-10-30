<template>
  <div>
    <!--具名插槽-->
    <Category title="美食" :listData="foods">
      <template slot="demo">
        <img src="./assets/logo.png" alt="">
      </template>

    </Category>
    <!--作用域插槽-->
    <C2>
      <template v-slot:default="{user}">
        {{user.a}}
      </template>
    </C2>
  </div>
</template>

<script>
  import Category from "./components/Category";
  import C2 from "./components/C2";

  export default {
    name: 'App',
    components: {Category, C2},
    data() {
      return {
        foods: ['火锅', '烤肉', '小龙虾', '牛排'],
        games: ['地平线4', '红色警戒', '超级玛丽'],
        film: ['不能说的秘密', '天台爱情故事', '头文字D']
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>

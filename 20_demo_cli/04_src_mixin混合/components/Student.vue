<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}} </h2>
  </div>

</template>

<script>
  import {mixin} from '../../src/mixin'

  export default {
    name: "Student",
    data() {
      return {
        name: '张三',
        sex: '男'
      }
    }
  }
</script>

<style scoped>

</style>
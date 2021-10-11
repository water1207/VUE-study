<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}} </h2>
    <h2>学生年龄：{{age}} </h2>
  </div>

</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
          msg: 'hello!'
      }
    },
    props: {
      name: String,
      sex: String,
      age: Number
    }
  }
</script>

<style scoped>

</style>
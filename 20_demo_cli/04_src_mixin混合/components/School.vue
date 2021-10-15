<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}} </h2>
  </div>

</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        name: 'HDU',
        address: 'HangZhou'
      }
    }
  }
</script>

<style scoped>

</style>
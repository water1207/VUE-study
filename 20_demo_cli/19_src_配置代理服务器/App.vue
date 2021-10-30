<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    methods: {
      getStudents(){
        axios.get('http').then(
            response => {
              console.log('successful', response.data)
            },
            error => {
              console.log('failed', error.message)
            }
        )
      }
    }
  }
</script>

<style>

</style>

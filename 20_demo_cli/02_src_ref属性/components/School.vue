<template>
  <div class="demo">
    <h2>学校名称: {{ name }} </h2>
    <h2>学校地址: {{ address }} </h2>
    <button @click="showName">点我提示学校名</button> 
  </div>
</template>

<script>
  const School = {
    name: 'School',
    data() {
        return {
            name: 'hdu',
            address: 'HZ'
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
  }
  export default School;
</script>

<style>
  .demo {
    background-color: #42b983;
  }
</style>
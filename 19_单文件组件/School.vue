<template>
  <div class="demo">
    <h2>学校名称: {{ name }} </h2>
    <h2>学校地址: {{ address }} </h2>
    <button @click="showName">点我提示学校名</button> 
  </div>
</template>

<script>
  const School = Vue.extend({
    data() {
        return {
            name: 'hdu',
            address: 'HZ'
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    },
  })
  export default school;
</script>

<style>

</style>
<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认" >
  </div>
</template>

<script>
  import {nanoid} from  'nanoid'

  export default {
    name: "MyHeader",
    methods: {
      add(e) {
        if(e.target.value === '') return alert('输入不能为空')

        const todo = {
          id: nanoid(),
          title: e.target.value,
          done: false }

        this.$emit('addTodo',todo)

        e.target.value = ''
      }
    }
  }
</script>

<style scoped>

</style>
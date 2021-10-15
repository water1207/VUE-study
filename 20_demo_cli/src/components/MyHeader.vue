<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认" >
  </div>
</template>

<script>
  import {nanoid} from  'nanoid'

  export default {
    name: "MyHeader",
    props: ['receive'],
    methods: {
      add(e) {
        if (!this.title.trim()) return

        const todo = {
          id: nanoid(),
          title: e.target.value,
          done: false }

        this.receive(todo)
        this.title = ''
      }
    }
  }
</script>

<style scoped>

</style>
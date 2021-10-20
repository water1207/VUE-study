<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.done" @click="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="del btn" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: "MyItem",
    props: ['todo', 'checkTodo', 'delTodo'],
    methods: {
      handleCheck(id) {
        this.checkTodo(id);
      },
      handleDel(id) {
        if(confirm('确认删除吗'))
          this.delTodo(id);
      }
    }
  }
</script>

<style scoped>
  li {
    width: 180px;
  }
  li label li input {
    position: relative;
    float: left;
  }
  li button {
    float: right;
    display: none;
  }
  li:hover button {
    display: block;
  }
</style>
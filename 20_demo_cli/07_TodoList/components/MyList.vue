<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            :checkTodo="checkTodo"
            :delTodo="delTodo">
    </MyItem>
  </ul>

</template>

<script>
  import MyItem from './MyItem'

  export default {
    name: "MyList",
    components: { MyItem },
    props: ['todos', 'checkTodo', 'delTodo']
  }
</script>

<style scoped>

</style>
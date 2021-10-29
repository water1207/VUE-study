<template>
  <ul class="todo-main">
    <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__wobble"
    >
      <MyItem v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              :checkTodo="checkTodo"
              :delTodo="delTodo">
      </MyItem>
    </transition-group>
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
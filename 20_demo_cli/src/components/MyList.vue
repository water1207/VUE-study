<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"></MyItem>
  </ul>

</template>

<script>
  import MyItem from './MyItem'

  export default {
    name: "MyList",
    components: { MyItem },
    props: ['todos']
  }
</script>

<style scoped>

</style>
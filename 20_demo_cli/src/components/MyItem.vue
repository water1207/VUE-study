<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button>删除</button>
  </li>
</template>

<script>
  export default {
    name: "MyItem",
    props: ['todo']
  }
</script>

<style scoped>

</style>
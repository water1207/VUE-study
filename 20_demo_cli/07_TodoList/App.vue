<template>
  <div>
    <MyHeader :addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></MyList>
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllDone="clearAllDone"></MyFooter>
  </div>
</template>

<script>
  import MyHeader from "./components/MyHeader";
  import MyList from "./components/MyList";
  import MyFooter from "./components/MyFooter";

  export default {
    name: 'App',
    components: {
      MyHeader,
      MyList,
      MyFooter
    },
    data() {
      return {
        todos: [
          {id: '001', title: '学习强国', done: false},
          {id: '002', title: '学VUE', done: false},
          {id: '003', title: '听歌', done: false},
        ]
      }
    },
    methods: {
      addTodo(todo) {
        console.log(todo);
        this.todos.unshift(todo)
      },
      checkTodo(id) {
        this.todos.forEach((todo) => {
          if (todo.id === id)
            todo.done = !todo.done
        })
      },
      delTodo(id) {
        this.todos = this.todos.filter((todo) => {
          return todo.id != id
        })
      },
      checkAllTodo(done) {
        this.todos.forEach((todo) => {
            todo.done = done
        })
      },
      clearAllDone() {
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    }
  }
</script>

<style>

</style>

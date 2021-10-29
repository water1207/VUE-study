<template>
  <div>
    <MyHeader @addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></MyList>
    <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDone="clearAllDone"></MyFooter>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  import MyHeader from "./components/MyHeader"
  import MyList from "./components/MyList"
  import MyFooter from "./components/MyFooter"

  export default {
    name: 'App',
    components: {
      MyHeader,
      MyList,
      MyFooter
    },
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
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
      updateTodo(id, title) {
        this.todos.forEach((todo) => {
          if (todo.id === id)
            todo.title  = title
        })
      },
      delTodo(_, id) {
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
    },
    mounted() {
      this.$bus.$on('updateTodo', this.updateTodo)
    },
    beforeMount() {
      this.pubId = pubsub.subscribe('delTodo', this.delTodo)
    },
    beforeDestroy() {
      this.$bus.$off('updateTodo')
      pubsub.unsubscribe(this.pubId)
    },
    watch:{
      todos: {
        deep: true,
        handler(value){
          localStorage.setItem('todos', JSON.stringify(value))
        }
      }
    }
  }
</script>

<style>

</style>

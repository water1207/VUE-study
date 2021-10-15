<template>
  <div>
    <MyHeader :receive="receive"></MyHeader>
    <MyList :todos="todos"></MyList>
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
      receive(x) {
        console.log(x);
        this.todos.unshift(x)
      }
    }
  }
</script>

<style>

</style>

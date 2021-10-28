<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.done" @click="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
      >
    </label>
    <button class="del btn" @click="handleDel(todo.id)">删除</button>
    <button class="del btn" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name: "MyItem",
    props: ['todo', 'checkTodo', 'delTodo'],
    methods: {
      handleCheck(id) {
        this.checkTodo(id);
      },
      handleDel(id) {
        if(confirm('确认删除吗'))
          //this.delTodo(id);
          pubsub.publish('delTodo', id)
      },
      handleEdit(todo) {
        // eslint-disable-next-line no-prototype-builtins
        if (todo.hasOwnProperty('isEdit')) {
          todo.isEdit = true
        }else{
          this.$set(todo, 'isEdit', true);
        }
        this.$refs.inputTitle.focus()
      },
      handleBlur(todo, e) {
        todo.isEdit = false;
        if (!e.target.value.trim())
          return alert('输入不能为空！')
        // 在下一次DOM更新结束后执行其指定的回调
        // 改变数据后，要基于更新后的新DOM进行操作时，要再nextTick所指定的回调函数中执行
        this.$nextTick(function() {
          this.$bus.$emit('updateTodo', todo.id, e.target.value)
        })
      }
    },
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
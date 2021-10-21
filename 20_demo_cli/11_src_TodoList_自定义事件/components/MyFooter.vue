<template>
  <div>
    <input type="checkbox" :check="isAll" @change="checkAll" :checked="isAll">
    <span>
      <span>已完成 {{doneTotal}} </span> / 全部 {{total}}
    </span>
    <button @click="handleClear">清除已完成</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
      total() {
        return this.todos.length
      },
      doneTotal() {
        return this.todos.reduce((pre, current)=> {
          return pre + (current.done ? 1 : 0)
        }, 0)
      },
      isAll() {
        return this.total === this.doneTotal && this.total > 0
      }
    },
    methods: {
      checkAll(e) {
        this.$emit('checkAllTodo', e.target.checked)
        //this.checkAllTodo(e.target.checked)
      },
      handleClear() {
        this.$emit('clearAllDone')
        //this.clearAllDone()
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">Click me</button>
    <School />
  </div>
</template>

<script>
  import School from './components/School.vue'

  export default {
    name: 'App',
    data() {
        return {
            msg: 'Hello world'
        }
    },
    components: {
      School
    },
    methods: {
      showDom() {
        console.log(this.$refs.title);
      }
    },
  }
</script>

<style>

</style>

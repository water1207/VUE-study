<template>
  <div>
    <Search />
    <br>
    <List />
  </div>
</template>

<script>
  import List from './components/List'
  import Search from './components/Search'

  export default {
    name: 'App',
    components: {Search, List},
    methods: {

    }
  }
</script>

<style>

</style>

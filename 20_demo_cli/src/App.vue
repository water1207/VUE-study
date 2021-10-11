<template>
  <div>
    <Student name="李四" sex="woman" :age="18" />
  </div>
</template>

<script>
  import Student from "./components/Student";

  export default {
    name: 'App',
    components: {
      Student
    }
  }
</script>

<style>

</style>

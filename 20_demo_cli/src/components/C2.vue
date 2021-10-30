<template>
  <div>
    <slot :user="user">

    </slot>
  </div>
</template>

<script>
  export default {
    name: "C2",
    data() {
      return {
        user: {'a' : 1, 'b' : 2}
      }
    }
  }
</script>

<style scoped>

</style>
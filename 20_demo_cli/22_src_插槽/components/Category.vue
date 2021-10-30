<template>
  <div>
    <h3>{{ title }} 分类</h3>
    <slot name="demo"></slot>
  </div>
</template>

<script>
  export default {
    name: "Category",
    props: ['listData', 'title']
  }
</script>

<style scoped>

</style>
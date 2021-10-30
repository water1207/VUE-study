<template>
  <div>
    <h3>Search Github Users</h3>
    <el-row>
      <el-col :span="6">
        <el-input type="text" v-model="keyWord" placeholder="enter the name you search"/>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="searchUsers">Search</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Search",
    data() {
      return {
        keyWord: ''
      }
    },
    methods: {
      searchUsers() {
        axios.get(`https:/api.github.com/search/users?q=${this.keyWord}`)
          .then(res => {
            console.log('success')
            this.$bus.$emit('getUsers', res.data.items)
          })
      }
    }
  }
</script>

<style scoped>

</style>
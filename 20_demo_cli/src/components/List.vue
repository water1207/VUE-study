<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="user in users" :key="user.login">
      <a :href="user.html_url">
        <el-card :body-style="{ padding: '0px'}">
          <img :src="user.avatar_url" class="image">
          <div style="padding: 14px;">
            <span>{{ user.login }}</span>
          </div>
        </el-card>
      </a>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "List.vue",
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.$bus.$on('getUsers', (users) => {
        console.log('我是List我已接受到数据', users)
        this.users = users
      })
    }
  }
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }
</style>
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWords"/>&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "MySearch",
  data() {
    return {
      keyWords: ''
    }
  },
  methods: {
    searchUser() {
      //请求前
      this.$bus.$emit('updateUserList', {isFirst:false, isLoading:true, errMsg:'', users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
          response => {
            console.log('请求成功')
            this.$bus.$emit('updateUserList', {isLoading:false, errMsg:'', users:response.data.items})
          },
          error => {
            console.log('请求失败')
            this.$bus.$emit('updateUserList', {isLoading:false, errMsg:error.message, users:[]})
          }
      )
    }
  }
}
</script>
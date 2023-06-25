<template>
  <div>
    <h1>用户登录</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名：</label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">密码：</label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<style>
</style>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
     axios({
      method: 'post',
      url: 'http://localhost:8081/api/login',
      data:{
        username:this.username,
        password:this.password
      }
     }).then(response =>{
      console.log(response.data)
     })
    }
  }
}
</script>
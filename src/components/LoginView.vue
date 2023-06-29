
<template>
    <div class="LoginView">
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <h1 class="title">登录</h1>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '../router';
  export default {
    name:"LoginView",
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
       axios.post('http://localhost:8081/api/login',this.loginForm).then(res =>{
          console.log(res.data);
          if(res.data.msg === 'success'){
            router.push('/emp')
          }
       }).catch();
      }
    }
  }
  </script>
  
  <style scoped>
  .login-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-align: center;
  }
  </style>
  
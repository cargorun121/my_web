<template>
  <!-- ref的作用是  可以在外部调用组件内方法-->

<el-form
  ref="form"
  :rules="LoginRules"
  :model="form"
  label-width="100px"
  status-icon
  class="login-container"
>
  <h3 class="login_title">信息管理系统登录</h3>
  <el-form-item
      label="用户名"
      prop="username"
      label-width="80px"
      class="username"
  >
    <el-input
        type="input"
        v-model="form.username"
        placeholder="请输入用户名"
    >
    </el-input>
  </el-form-item>
  <el-form-item
      label="密码"
      prop="password"
      label-width="80px"
      class="password"
  >
    <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
    >
    </el-input>
  </el-form-item>
  <el-form-item class="login_button" label-width="0px">
    <el-button type="primary" @click="loginIndex" class="login_button">登录</el-button>
  </el-form-item>
</el-form>
</template>

<script >
import Mock from 'mockjs'
export default {
  name: "loginIndex",
  data(){
    return{
      form:{
        password:'',
        username:'',
      },
      LoginRules:{
      }
    }

  },
  methods:{
    loginIndex(){
      const token=Mock.Random.guid()
      this.$store.commit('setToken',token)
      this.$router.push({name:'MainTest'})
    }
  }
}
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cacac6;
}
.login_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;

}
.login_button{
  margin: 10px auto 0px auto;
}

</style>
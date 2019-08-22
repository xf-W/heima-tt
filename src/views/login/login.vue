<template>
  <div class="nav">
    <el-card class="box-card">
      <img src="../../assets/images/logo_index.png" alt />
      <!--  -->
      <el-form ref="form" :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:226px;margin-right:20px"></el-input>
          <el-button type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <!--  -->
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") no-repeat center/cover;
  position: absolute;
  top: 0;
  left: 0;
  .box-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -150px;
    img {
      display: block;
      margin: 0 auto;
      width: 200px;
      margin-bottom: 30px;
    }
  }
}
</style>

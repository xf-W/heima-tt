<template>
  <div class="nav">
    <el-card class="box-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="form" :model="listForm" :rules="rulesForm">
        <el-form-item prop="mobile">
          <el-input v-model="listForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:235px;margin-right:10px;" v-model="listForm.code" placeholder="请输入验证码"></el-input>
          <el-button type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :v-model="true">备选项</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('请输入合法手机号'))
      }
      return callback()
    }
    return {
      listForm: {
        mobile: '19999999999',
        code: '246810'
      },
      rulesForm: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validatePass, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.listForm)
          .then(res => {
            console.log(this)

            this.$router.push('/')
          })
          // eslint-disable-next-line handle-callback-err
          .catch(err => {
            this.$message.error('手机号或验证码错误')
          })
      })
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 50%;
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
}
</style>

<template>
  <div>
    <el-container class="my-container">
      <!-- =========侧边栏========= -->
      <el-aside :width="isCollapse?'64px':'200px'">
           <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b" :collapse="isCollapse" :collapse-transition="false" router>
      <div :class="isCollapse?'logomini':'logo'"></div>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-document"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-setting"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-menu"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-menu"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <el-container>
        <!-- =========头部========= -->
        <el-header>
          <span class="el-icon-s-fold icon" @click="toggel()"></span>
          <span>江苏传智播客科技教育有限公司</span>
          <el-dropdown>
            <span class="el-dropdown-link">
                <img src="../../assets/images/avatar.jpg" alt="">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!-- =========主体========== -->
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return { isCollapse: false }
  },
  methods: {
    toggel () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-menu{
      height: 100%;
      .logo{
          height: 60px;
          background: url('../../assets/images/logo_admin.png') no-repeat center/140px auto;
          background-color: #002244;
      }
      .logomini{
          height: 60px;
          background: url('../../assets/images/logo_admin_01.png') no-repeat center/35px auto;
          background-color: #002244;
      }
  }
  .el-header {
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    .icon {
      font-size: 22px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .el-dropdown{
        float: right;
        img{
            width: 24px;
            vertical-align: middle;
        }
    }
  }
}
</style>

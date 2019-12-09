<template>
  <div>
    <el-menu class="el-menu" mode="horizontal">

      <el-menu-item class="menu-logo-holder">
        <img class="menu-logo" src="@/assets/menu-logo.png">
      </el-menu-item>

      <a href="/">
        <div class="float-left">
          <el-menu-item class="disable-element-hover flo">首页</el-menu-item>
        </div>
      </a>

      <a href="/explore">
        <div class="float-left">
          <el-menu-item class="disable-element-hover">浏览</el-menu-item>
        </div>
      </a>

      <a href="/nearby">
        <div class="float-left">
          <el-menu-item class="disable-element-hover">附近</el-menu-item>
        </div>
      </a>

      <a v-if="!isLogin" href="/login">
        <div class="float-right">
          <el-menu-item class="disable-element-hover">登录</el-menu-item>
        </div>
      </a>

      <a v-else href="/my">
        <div class="float-right">
          <el-menu-item class="disable-element-hover">个人资料</el-menu-item>
        </div>
      </a>

      <a href="/search">
        <div class="float-right">
          <el-menu-item class="disable-element-hover">专业搜索</el-menu-item>
        </div>
      </a>

      <div class="float-right">
        <el-menu-item class="disable-element-hover">
          <el-input size="small" placeholder="请输入内容">
            <el-button slot="append" class="search-button" icon="el-icon-search" />
          </el-input>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
// import request from '@/utils/require';
export default {
  data() {
    return {
      isActive: '1',
      isRouter: true,
      isLogin: false
    }
  },
  mounted: function() {
    if (localStorage.getItem('USER_TOKEN') !== null) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style>
.float-left {
  float: left;
}

.float-right {
  float: right;
}

.disable-element-hover:hover {
  background: white !important;
}

.disable-element-hover {
  background: white !important;
}

.search-button {
  width: 30px;
  padding-right: 30px;
  padding-left: 8px;
}

.menu-logo-holder {
  width: 180px;
}

.menu-logo {
  max-width: 100%;
  max-height: 100%;
}
</style>

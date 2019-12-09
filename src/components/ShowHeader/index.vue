<template>
  <div>
    <el-menu default-active="true" class="el-menu" mode="horizontal">
      <el-menu-item class="menu-logo-holder">
        <img class="menu-logo" src="@/assets/menu-logo.png">
      </el-menu-item>
      <el-menu-item index="/default">首页</el-menu-item>
      <el-menu-item index="/explore">浏览</el-menu-item>
      <el-menu-item index="/nearby">附近</el-menu-item>
      <el-menu-item v-if="isLogin === true" index="/login" class="disable-element-hover">个人资料</el-menu-item>
      <el-menu-item v-else index="/login" class="disable-element-hover">登录</el-menu-item>
      <el-menu-item index="/search" class="disable-element-hover">搜索</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
  }
}
</script>
<style>
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

<template>
  <div class="main-header">
    <el-menu class="el-menu" mode="horizontal">

      <el-menu-item class="menu-logo-holder">
        <img class="menu-logo" src="@/assets/menu-logo.png">
      </el-menu-item>

      <a href="/">
        <div class="float-left">
          <el-menu-item class="disable-element-hover">首页</el-menu-item>
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

      <a v-else v-permission="['editor']" href="/my">
        <div class="float-right">
          <el-menu-item class="disable-element-hover">个人资料</el-menu-item>
        </div>
      </a>

      <a v-permission="['admin']" href="/dashboard">
        <div class="float-right">
          <el-menu-item class="disable-element-hover">后台管理</el-menu-item>
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
import { mapGetters } from 'vuex'
import permission from '@/directive/permission'

export default {
  directives: {
    permission
  },
  data() {
    return {
      isLogin: false
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      if (this.token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

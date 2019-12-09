<template>
  <div>
    <el-container>
      <el-header>
        <main-header />
      </el-header>

      <el-main>
        <div class="selected-bg-color main-body" style="padding: auto">

          <div class="blank-area" />

          <el-form ref="form" :model="form">
            <div style="text-align: center; font-size: x-large;">登录</div>
            <br>
            <div class="center">
              <el-input v-model="form.userId" size="medium" placeholder="请输入账号" />
            </div>
            <br>
            <div class="center">
              <el-input v-model="form.password" type="password" size="medium" placeholder="密码" />
            </div>
            <br>
            <div style="text-align: center">
              <el-button size="medium" @click="onSubmit">登录</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">忘记密码</a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">注册账号</a>
            </div>
            <br>
            <div style="text-align: center" />
          </el-form>

          <div class="blank-area" />

        </div>
      </el-main>

      <el-footer>
        <main-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MainHeader from '@/components/ShowNav'
import MainFooter from '@/components/ShowFooter'
import request from '@/utils/request'

export default {
  components: {
    'main-header': MainHeader,
    'main-footer': MainFooter
  },
  data() {
    return {
      form: {
        userId: '',
        password: ''
      },
      info: ''
    }
  },
  methods: {
    onSubmit: function() {
      const params = new URLSearchParams()
      params.append('userId', this.form.userId)
      params.append('password', this.form.password)
      request
        .post('/login', params)
        .then(response => {
          const data = response.data.data
          this.saveLoginData(data)
          /* eslint-disable no-console */
          console.log(response.data)
          window.confirm('登录成功')
          this.$router.push({
            path: '/'
          })
        }).catch(error => {
          /* eslint-disable no-console */
          console.log(error)
          window.alert('登录失败')
        })
    },
    saveLoginData(data) {
      console.log('SaveLoginData: ' + data)
      this.$store.commit({
        type: 'account/setToken',
        val: data
      })
    }
  }
}
</script>

<style>
.center {
  width: 300px;
  margin: 0 auto;
}

.selected-bg-color {
  background-color: #f4f8f2;
}

.main-body {
  height: 80%;
}

.blank-area {
  height: 120px;
}
</style>

<template>
  <div class="app-container">
    <el-form ref="form" :model="user" label-width="120px">
      <el-form-item label="ID">
        <el-col :span="11">
          <el-input v-model="user.userId" disabled />
        </el-col>
      </el-form-item>

      <el-form-item label="用户名">
        <el-col :span="11">
          <el-input v-model="user.userName" />
        </el-col>
      </el-form-item>

      <el-form-item label="密码">
        <el-col :span="11">
          <el-input v-model="user.password" show-password />
        </el-col>
      </el-form-item>

      <el-form-item label="所属博物馆">
        <el-col :span="11">
          <el-input v-model="user.museumId" />
        </el-col>
      </el-form-item>

      <el-form-item label="创建者">
        <el-col :span="11">
          <el-input v-model="user.creator" />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
import { uuid } from '@/utils'

export default {
  data() {
    return {
      user: {
        userId: uuid(),
        userName: '',
        password: '',
        userTel: '',
        email: '',
        deptId: '',
        userAvatar: '',
        userStatus: '',
        address: '',
        birthday: '',
        realName: '',
        createDate: '',
        creator: '',
        updateDate: '',
        updater: '',
        userSex: '',
        museumId: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
      request
        .post('/api/user/create', {
          user: this.user
        })
        .then(response => {
          this.$message({
            message: response.msg,
            type: 'info'
          })
          this.$router.push({
            path: '/user/user-list'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    onCancel() {
      this.user.userName = ''
      this.user.password = ''
      this.user.userTel = ''
      this.user.email = ''
      this.user.deptId = ''
      this.user.userAvatar = ''
      this.user.userStatus = ''
      this.user.address = ''
      this.user.birthday = ''
      this.user.realName = ''
      this.user.createDate = ''
      this.user.creator = ''
      this.user.updateDate = ''
      this.user.updater = ''
      this.user.userSex = ''
      this.user.museumId = ''
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


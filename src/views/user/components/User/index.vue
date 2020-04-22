<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="用户Id">
        <el-col :span="11">
          <el-input v-model="form.userId" disabled />
        </el-col>
      </el-form-item>

      <el-form-item label="用户名" prop="userName">
        <el-col :span="11">
          <el-input v-model="form.userName" />
        </el-col>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-col :span="11">
          <el-input v-model="form.email" />
        </el-col>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-col :span="11">
          <el-input v-model="form.password" show-password />
        </el-col>
      </el-form-item>

      <el-form-item label="角色" prop="role">
        <el-col :span="11">
          <el-select v-model="form.role" clearable>
            <el-option v-for="item in roleList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item label="所属博物馆" prop="museumId">
        <el-col :span="11">
          <el-input v-model="form.museumId" />
        </el-col>
      </el-form-item>

      <el-form-item label="创建者">
        <el-col :span="11">
          <el-input v-model="form.creator" disabled />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">创建</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserId } from '@/utils/auth'
import { getUserDetails, editUser, addUser } from '@/api/user'

const defaultForm = {
  userId: undefined,
  userName: '',
  email: '',
  password: '',
  role: '',
  museumId: '',
  creator: '',
  createDate: '',
  updateDate: '',
  updater: ''
}

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必填项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必填项'))
      } else {
        callback()
      }
    }

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        userName: [{ validator: validateRequire }],
        email: [{ validator: validateRequire }],
        password: [{ validator: validateRequire }],
        role: [{ validator: validateRequire }]
      },
      tempRoute: {},
      roleList: [
        { label: '管理员', value: 'admin' },
        { label: '用户', value: 'user' }
      ]
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.getDetails(id)
    } else {
      this.form = Object.assign({}, defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    getDetails(id) {
      getUserDetails({ userId: id }).then(res => {
        this.form = {
          userId: res.data.userId,
          userName: res.data.userName,
          email: res.data.email,
          password: '',
          role: res.data.role,
          museumId: res.data.museumId,
          creator: res.data.creator,
          createDate: res.data.createDate
        }
        this.setPageTitle()
      })
    },
    setPageTitle() {
      const title = 'Edit User'
      document.title = `${title} - ${this.form.userName}`
    },
    handleSubmit() {
      this.form = Object.assign(this.form, {
        updateDate: new Date().getTime(),
        updater: getUserId()
      })
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            console.log(this.form)
            editUser(getUserId(), this.form).then(res => {
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '用户信息已编辑',
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/user/user-list')
              } else {
                this.$notify({
                  title: 'Error',
                  type: 'error',
                  duration: 2000
                })
              }
            })
          } else {
            addUser(getUserId(), this.form).then(res => {
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '用户已创建',
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/user/user-list')
              } else {
                this.$notify({
                  title: 'Error',
                  type: 'error',
                  duration: 2000
                })
              }
            })
          }
        } else {
          console.log('err submit')
          return false
        }
      })
    },
    handleCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


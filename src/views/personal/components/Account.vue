<template>
  <el-form>
    <el-form-item label="Name">
      <el-input v-model.trim="user.userName" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model.trim="user.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { editUser } from '@/api/user'
import { getUserId } from '@/utils/auth'

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          userName: '',
          email: ''
        }
      }
    }
  },
  methods: {
    test() {
      editUser()
    },
    submit() {
      this.user = Object.assign(this.user, {
        updateDate: new Date().getTime(),
        updater: getUserId()
      })
      console.log(this.user)
      this.$notify({
        title: '成功',
        message: '已编辑',
        type: 'success',
        duration: 5000
      })

      // editUser(getUserId(), this.form).then(res => {
      //   if (res.code === 200) {
      //     this.$notify({
      //       title: '成功',
      //       message: '用户信息已编辑',
      //       type: 'success',
      //       duration: 5000
      //     })
      //     this.$router.push('/personal/index')
      //   } else {
      //     this.$notify({
      //       title: 'Error',
      //       type: 'error',
      //       duration: 2000
      //     })
      //   }
      // })
    }
  }
}
</script>

<template>
  <el-container>
    <el-button @click="logout">Logout</el-button>
  </el-container>
</template>

<script>
export default {
  data: function() {

  },
  methods: {
    logout: function() {
      window.alert('Logout success.')
      localStorage.removeItem('USER_TOKEN')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

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
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/index`)
    }
  }
}
</script>

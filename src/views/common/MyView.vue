<template>
  <el-container>
    <el-button @click="logout">Logout</el-button>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push(`/index`)
    }
  }
}
</script>

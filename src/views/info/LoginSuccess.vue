<template>
  <div>
    <h1>登录成功！</h1>
    <router-link to="/">To /</router-link>
    <br>
    <router-link to="/explore">To /explore</router-link>
    <br>
    <router-link to="/nearby">To /nearby</router-link>
    <br>
    <router-link to="/search">To /search</router-link>
    <br>
    <router-link to="/login">To /login</router-link>
    <br>
  </div>
</template>

<script>
export default {
  mounted: async function() {
    await this.sleep(3000)
    this.$router.push({ path: '/' })
  },
  methods: {
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

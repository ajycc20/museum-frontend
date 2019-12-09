<template>
  <div>
    <index-nav />
    <button @click="login">登录</button>
    <span>{{ info }}</span>
    <br><br>
    <div v-for="currency in info" :key="currency.code" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol" />
        {{ currency.rate_float | currencydecimal }}
      </span>
    </div>
    <index-footer />
  </div>
</template>

<script>
import NavMenu from '@/components/ShowNav'
import Footer from '@/components/ShowFooter'
import axios from 'axios'

export default {
  components: {
    'index-nav': NavMenu,
    'index-footer': Footer
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  },
  data: function() {
    return {
      info: ''
    }
  },
  methods: {
    login: function() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
    }
  }
}
</script>

<style>
</style>

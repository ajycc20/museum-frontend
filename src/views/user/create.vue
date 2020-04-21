<template>
  <user :is-edit="false" />
</template>

<script>
import User from './components/User'
export default {
  name: 'CreateUser',
  components: { User }
}
</script>

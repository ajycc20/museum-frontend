<template>
  <user :is-edit="true" />
</template>

<script>
import User from './components/User'
export default {
  name: 'EditUser',
  components: { User }
}
</script>

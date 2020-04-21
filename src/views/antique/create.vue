<template>
  <antique :is-edit="false" />
</template>

<script>
import Antique from './components/Antique'
export default {
  name: 'CreateAntique',
  components: { Antique }
}
</script>

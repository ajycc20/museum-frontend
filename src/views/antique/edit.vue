<template>
  <antique :is-edit="true" />
</template>

<script>
import Antique from './components/Antique'
export default {
  name: 'EditAntique',
  components: { Antique }
}
</script>

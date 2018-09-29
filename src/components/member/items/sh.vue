<template lang="html">
  <div class="sh">
    <no-pages v-if="isShowNone"></no-pages>
  </div>
</template>

<script>
import NoPages from './no.vue'
export default {
  name: 'sh',
  components:{
    NoPages
  },
  data(){
    return {
      isShowNone: true
    }
  }
}
</script>

<style lang="css">

</style>

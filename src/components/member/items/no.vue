<template lang="html">
  <div class="noMessage">
      <img v-lazy="" alt="noMessage">
      <p>您还没有相关的订单</p>
      <span>可以去看看那些想买的</span>
  </div>
</template>

<script>
export default {
  name: ' no',
  data(){
    return {
      
    }
  }

}
</script>

<style lang="css" scoped>
.noMessage {
  padding-top: 1rem;
  text-align: center;
}
.noMessage img {
  width: 30%;
}
.noMessage p {
  font-size: .35rem;
}
.noMessage span {
  color:#666;
  font-size: .25rem;
}
</style>

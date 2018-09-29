<template lang="html">
  <div class="dsh">
    <div class="list" v-for="(order,index) of orders" :key="index">
      <p>订单号: {{order.date}}<span>卖家已经发货</span></p>
      <div class="listDetails" v-for="item in order.buyList">
        <div class="listPic">
          <img v-lazy="item.GoodsImage" :alt="item.GoodsName">
        </div>
        <div class="listMsg">
          <span>{{item.GoodsName}}</span>
        </div>
        <div class="listPrice">
          <p>￥{{item.GoodsPrice}}</p>
          <span>x{{item.GoodsBuyNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'dsh',
  computed: {
    ...mapState(['orders'])
  }
}
</script>

<style lang="css" scoped>
</style>

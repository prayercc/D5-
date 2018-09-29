<template lang="html">
  <div class="dsh">
    <div class="list" v-for="(order,index) of orders" :key="index">
      <p class="listTop">订单号: {{order.date}}<span>卖家已经发货</span></p>
      <div class="listDetails" v-for="item in order.buyList">
        <div class="listPic">
          <img v-lazy="item.GoodsImage" :alt="item.GoodsName">
        </div>
        <div class="listMsg">
          <p>{{item.GoodsName}}</p>
        </div>
        <div class="listPrice">
          <p><b>￥{{item.GoodsPrice}}</b></p>
          <span>x{{item.GoodsBuyNum}}</span>
        </div>
      </div>
      <div class="listSumm">
        <p>共2件商品&nbsp;&nbsp;合计:<span><small>￥</small>23</span></p>
        <span>确认收货</span>
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
.dsh {
  margin-bottom: 1rem;
}
.list {
  width: 90%;
  padding: .1rem .2rem;
  margin: .2rem auto 0 auto;
  font-size: .30rem;
  border-radius: .1rem;
  box-shadow: 1px 1px 5px #ddd;
  background-color: #fff;
}
.listTop {
  margin: 0;

  overflow: hidden;
}
.listTop span {
  display: inline-block;
  color: #ff4e22;
  float: right;
}
.listDetails {
  /* height: 1rem; */
  display: flex;
}
.listPic {
  width:30%;
}
.listPic img {
  width:100%;
}
.listMsg {
  width: 60%;
}
.listPrice {
  width: 10%;
  text-align: right;
}
.listPrice span {
  color: #666;
}
.listSumm {
  text-align: right;
}
.listSumm p span {
  font-size: .40rem;
}
.listSumm > span {
  display: inline-block;
  padding: .1rem .2rem;
  color:#ff4e22;
  border: 1px solid #ff4e22;
  border-radius: .4rem;
}
</style>

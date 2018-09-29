<template lang="html">
  <div class="orderDetails">
    <div class="exitPort">
      <span @click="$router.go(-1)"><i class="icon iconExport"></i>确认订单</span>
    </div>
    <div class="receiver">
      <i class="icon iconAdd"></i>
      <div class="userAddress">
        <p class="userM">收件人 :<span>{{defaultAdd[0].name}}</span><span>{{defaultAdd[0].phone}}</span></p>
        <p class="userD">收货地址 :<span>{{defaultAdd[0].detail}}</span></p>
        <span>(收货不便时,可选择免费代收服务)</span>
      </div>
      <i class="icon iconChooseAdd"></i>
    </div>
    <div class="orderDetals">
      <div class="goods" v-for="(goods,index) in pays.buyList"  :key="index">
        <img v-lazy="goods.GoodsImage" alt="pic">
        <div class="goodsMsg">
          <p>{{goods.GoodsName}}</p>
          <p><small>￥</small>{{goods.GoodsPrice}}<span>x{{goods.GoodsBuyNum}}</span></p>
        </div>
      </div>
      <div class="goodsOther">
        <p>配送方式<span>快递包邮</span></p>
        <p>运险费<span>卖家赠送</span></p>
      </div>
    </div>
    <div class="confirm">
      <p>合计: <span><small>￥</small>{{pays.money}}</span></p>
      <div class="confirmBtn" @click="comfirm()">提交订单</div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex'
export default {
  name: 'orderDetails',
  computed: {
    ...mapState(['pays']),
    ...mapGetters(['defaultAdd'])
  },
  methods: {
    comfirm(){
      let date = Date.now();
      //新增订单
      this.setOrders({
        date,
        isPay: true,
        isReceive: false,
        count: this.pays.buyList.length,
        money: this.pays.money,
        buyList: this.pays.buyList,
        address: this.defaultAdd[0]
      });
      this.clearCarts(this.pays.buyList);//清理购物车
      this.clearPays();//清理当前订单
      this.$router.push('/');
    },
    ...mapMutations({
      clearCarts: "CLEAR_CARTS",
      setOrders: "SET_ORDERS",
      clearPays: "CLEAR_PAYS"
    })
  }
}
</script>

<style lang="css" scoped>
.orderDetails {
  position: relative;
  margin-bottom: 1.8rem;
}
.exitPort {
  padding: .2rem 0;
  border-bottom: 1px solid #666;
  background-color: #fff;
}
.exitPort span {
  font-size: .30rem;
  vertical-align:top;
}
.iconExport {
  background: url("../../../assets/lt.png");
}
.receiver {
  display: flex;
  align-items: center;
  padding: .2rem;
  background-color: #fff;
}
.iconAdd {
  margin-right: 9px;
  background: url("../../../assets/address.png");
}
.userAddress {
  line-height: 1.4;
  color: #666;
  letter-spacing: 1px;
  flex: 0 1 90%;
}
.userAddress p{
  margin: .1rem 0;
  overflow: hidden;
}
.userAddress p + span {
  font-size: .22rem;
  color: #ff852a;
}
.userM {
  font-size: .30rem;
}
.userM > span:first-child{
    padding: 0 .1rem;
}
.userM > span:last-child{
    float: right;
}
.userD {
  font-size: .25rem;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.iconChooseAdd {
  background: url("../../../assets/gt.png");
}
.icon {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-size: cover;
}
/*列表*/
.orderDetals {
  padding: .1rem 0;
   background-color: #fff;
}
.goods {
  display: -webkit-flex; /* Safari */
  display: flex;
  margin: .1rem 0;
  padding: .1rem .2rem;
  height: 1.6rem;
  font-size: .30rem;
  background-color: #f6f6f6;
}
.goods img {
  height: 100%;
  margin-right: .1rem;
}
.goodsMsg {
  position: relative;
  flex-grow: 1;
  font-size: .35rem;
}
.goodsMsg p:first-child {
  margin: 0;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.goodsMsg p:last-child{
  display: block;
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  color: #ff4e22;
  overflow: hidden;
}
.goodsMsg p span{
  color: #000;
  font-size: .30rem;
  float: right;
}
.goodsOther p{
  margin: 0;
  font-size: .30rem;
  padding: .2rem;
  overflow: hidden;
}
.goodsOther p span{
  float: right;
}
/* 提交订单 */
.confirm {
  position: fixed;
  left:0;
  bottom: .88rem;
  width: 100%;
  text-align: right;
  background-color: #fff;
}
.confirm p{
  display: inline-block;
  margin: 0 .3rem;
  font-size: .25rem;
}
.confirm p span {
  font-size: .30rem;
  color:#ff4e22;
}
.confirmBtn {
  display: inline-block;
  height: .88rem;
  width: 30%;
  color: #fff;
  font-size: .30rem;
  line-height: .88rem;
  text-align: center;
  background: -webkit-linear-gradient(right,#ff4e22,#ff852a); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right,#ff4e22,#ff852a); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,#ff4e22,#ff852a); /* Firefox 3.6 - 15 */
  background: linear-gradient(right,#ff4e22,#ff852a);
}
</style>

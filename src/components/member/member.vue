<template lang="html">
  <div class="member">
    <div class="top">
      <img src="../../../static/img/github.png" alt="头像">
    </div>
    <div class="myOrders">
      <p>我的订单<span>查看全部订单 &gt;</span></p>
      <ul>
        <router-link  v-for="(item,index) in tagList" :key="index" :to="{path: 'orders/'+ item.path}" tag="li">
          <i class="orderIcon" :class="item.path"></i>
          <span>{{item.name}}</span>
        </router-link>
      </ul>
    </div>
    <div class="myOrders">
      <p>我的地址<span>添加新地址 +</span></p>
      <ol>
        <li >
          <strong>{{defaultAdd[0].name[0]}}</strong>
          <div class="myOrdersLeft">
            <p class="myOrderName">{{defaultAdd[0].name}}<span>{{defaultAdd[0].phone}}</span></p>
            <p><span v-if="defaultAdd[0].isDefault">默认</span>{{defaultAdd[0].detail}}</p>
          </div>
          <div class="myOrdersRight">
            <span>编辑</span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'member',
  data(){
    return {
      tagList: [
        {
          name: '待付款',
          path:'dfk'
        },
        {
          name: '待发货',
          path:'dfh'
        },
        {
          name: '待收货',
          path:'dsh'
        },
        {
          name: '待评价',
          path:'dpj'
        },
        {
          name: '退款/售后',
          path:'sh'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['defaultAdd'])
  }
}
</script>

<style lang="css" scoped>
.member {
  overflow-x: hidden;
}
.top {
  position: relative;
  width: 100%;
  height: 3.5rem;
  text-align: center;
  background: -webkit-linear-gradient(right,#ff4e22,#ff852a); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right,#ff4e22,#ff852a); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,#ff4e22,#ff852a); /* Firefox 3.6 - 15 */
  background: linear-gradient(right,#ff4e22,#ff852a);
}
.top::after{
  width: 110%;
  height: .80rem;
  position: absolute;
  left: -5%;
  bottom: 0rem;
  z-index: 5;
  content: '采姑娘的小蘑菇';
  font-size: .30rem;
  line-height: .80rem;
  border-radius: 50% 50% 0 0;
  background: #fff;
}
.top img{
  height: 70%;
}
.myOrders {
  box-sizing: border-box;
  padding: .1rem .2rem;
  margin-bottom: .1rem;
  background-color: #fff;
}
.myOrders > p {
  margin: 0;
  padding: .1rem .2rem;
  font-size: .30rem;
  line-height: .40rem;
  font-weight: bold;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.myOrders > p span {
  font-size: .22rem;
  font-weight: normal;
  color:#666;
  float: right;
}
.myOrders ul {
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.myOrders ul li {
  display: inline-block;
  font-size: .25rem;
  text-align: center;
}
.orderIcon {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto 0.1rem;
  background-size: 100% 100% !important;
}
.dfk {
  background: url('../../../static/img/icon/dfk.png');
}
.dfh {
  background: url('../../../static/img/icon/dfh.png');
}
.dsh {
  background: url('../../../static/img/icon/dsh.png');
}
.dpj {
  background: url('../../../static/img/icon/dpj.png');
}
.sh {
  background: url('../../../static/img/icon/sh.png');
}
.myOrders ol {
  padding: 0;
  list-style: none;
}
.myOrders ol li {
  margin-bottom: .4rem;
}
.myOrders .myOrdersLeft {
  width:80%;
}
.myOrders li strong {
  display: inline-block;
  width: .7rem;
  height: .7rem;
  color: #fff;
  font-size: .25rem;
  line-height: .7rem;
  text-align: center;
  border-radius: 50%;
  background: -webkit-linear-gradient(right,#ff4e22,#ff852a); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right,#ff4e22,#ff852a); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,#ff4e22,#ff852a); /* Firefox 3.6 - 15 */
  background: linear-gradient(right,#ff4e22,#ff852a);
}
.myOrders .myOrdersLeft {
  display: inline-block;
  width:73%;
  vertical-align: middle;
}
.myOrders .myOrdersLeft p{
  margin:0;
}
.myOrderName {
  margin: .1rem;
  font-size: .28rem;
}
.myOrderName span {
  margin-left: .1rem;
  color:#666;
  font-size: .25rem;
}
.myOrderName + p {
  font-size: .23rem;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.myOrderName + p span {
  display: inline-block;
  padding: .06rem;
  margin-right: .1rem;
  color: #ff4e22;
  background-color: #f7d9b3;
}
.myOrdersRight {
  display: inline-block;
}
.myOrdersRight span {
  padding: .1rem .2rem;
  border-left: 1px solid #ddd;
}
</style>

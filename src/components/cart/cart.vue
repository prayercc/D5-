<template lang="html">
  <div class="carts">
    <p class="back" @click="$router.go(-1)">&lt;&nbsp;返回</p>
    <div class="cartItem" v-for="(item,index) in cartList" :key="index">
      <div class="itemcheck">
        <input type="checkbox" :id="index" class="regular-checkbox" :value="item" v-model="buyList"/>
        <label :for="index">●</label>
      </div>
      <div class="itempic">
        <img v-lazy="item.GoodsImage" @click="onDetail(item)">
      </div>
      <div class="itemtext">
        <p>{{item.GoodsName}}</p>
        <p class="itemMoney">￥<span>{{item.GoodsPrice}}</span></p>
        <div class="changeNumber">
          <b class="numberIcon" @click="cartsOperator('add',index)">+</b>
          <span>{{item.GoodsBuyNum}}</span>
          <b class="numberIcon" @click="cartsOperator('reduce',index)">-</b>
        </div>
      </div>
    </div>
    <div class="cartSum">
      <div class="cartSumLeft" @click="checkALL()">
        <input type="checkbox" id="cartSum" class="regular-checkbox" v-model="isAllChoose"/>
        <label for="cartSum" >●</label>
        <span>全选</span>
      </div>
      <div class="cartSumRight">
        <p>合计:<span>￥{{payMoney}}</span></p>
        <button type="button" name="jiesuna" @click="Settlement()">结算({{buyCount}})</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'carts',
  data() {
    return {
      buyList: [],
      isAllChoose: false
    }
  },
  watch: {
    //全选按钮是否选中
    buyCount(val, old) {
      if (val == this.cartList.length) {
        this.isAllChoose = true;
      } else {
        this.isAllChoose = false;
      }
    }
  },
  computed: {
    payMoney() {
      if (JSON.stringify(this.buyList) !== '[]') {
        let sum = this.buyList.reduce((totle, currentValue) => {
          return totle + currentValue.GoodsPrice * currentValue.GoodsBuyNum;
        }, 0);
        return sum;
      }
      return 0;
    },
    buyCount() {
      return this.buyList.length;
    },
    ...mapState({
      cartList: 'carts'
    })
  },
  methods: {
    //改变购买数量
    cartsOperator(type, idx) {
      if (type === 'add') {
        this.cartList[idx].GoodsBuyNum++;
      } else {
        if (this.cartList[idx].GoodsBuyNum > 1) {
          this.cartList[idx].GoodsBuyNum--;
        }
      }
    },
    //是否全选
    checkALL() {
      if (!this.isAllChoose) {
        this.buyList = JSON.parse(JSON.stringify(this.cartList));
      } else {
        this.buyList = [];
      }
    },
    /*进入商品详情*/
    onDetail(item) {
      this.setGoods(item);
      this.$router.push("/detail");

    },
    Settlement(){
      this.setPays({
        buyList: this.buyList,
        money: this.payMoney
      });//加入当前支付
      this.$router.push('/orderDetails');
    },
    ...mapMutations({
      // clearCarts: "CLEAR_CARTS",
      // setOrders: "SET_ORDERS",
      setPays: "SET_PAYS",
      setGoods: "SET_GOODS"
    })
  }
}
</script>

<style lang="css" scoped>
.carts {
  width: 100%;
  margin-bottom: 2rem;
  background-color: #f0f0f0;
}
.cartItem {
  display: flex;
  box-sizing: border-box;
  align-items:center;
  width: 95%;
  padding: .1rem .2rem;
  margin: .2rem auto 0 auto;
  border-radius: .1rem;
  box-shadow: 1px 1px 5px #ddd;
  background-color: #fff;
}
.itemcheck {
  display: inline-block;
  width: 10%;
}
.itempic {
  display: inline-block;
  width: 40%;
}
.itempic img {
  width: 100%;
  border-radius: .1rem;
}
.itemtext {
  display: inline-block;
  width: 50%;
  font-size: .30rem;
}
.itemMoney {
  display: inline-block;
  margin:0;
  color: #ff4e22;
}
.itemMoney span {
  font-size: .40rem;
}
/* 结算 */
.cartSum {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items:center;
  bottom: .88rem;
  width: 100%;
  padding: .1rem .2rem;
  background-color: #fff;
}
.cartSumLeft {
  display: inline-block;
  width: 16%;
  font-size: .30rem;
  color: #666;

}
.cartSumLeft span {
  vertical-align: top;
}
.cartSumRight {
  display: inline-block;
  width: 84%;
  text-align: right;
}
.cartSumRight p {
  display: inline-block;
  margin: 0 .1rem;
  font-size: .30rem;
}
.cartSumRight p span {
  color: #ff4e22;
}
.cartSumRight button {
  font-size: .30rem;
  padding: .2rem .4rem;
  color: #fff;
  border-radius: .4rem;
  background: -webkit-linear-gradient(right,#ff4e22,#ff852a); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right,#ff4e22,#ff852a); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,#ff4e22,#ff852a); /* Firefox 3.6 - 15 */
  background: linear-gradient(right,#ff4e22,#ff852a);
}
</style>

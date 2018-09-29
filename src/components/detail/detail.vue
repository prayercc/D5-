<template lang="html">
<div class="container" v-show="mainarea">
  <p class="back" @click="$router.go(-1)">&lt;&nbsp;返回</p>
      <div class="containTop">
        <img :src="goods.GoodsImage" class="goodsImg">
        <p class="containMoney">￥<span>{{goods.GoodsPrice}}</span></p>
        <p class="conteinName">{{goods.GoodsName}}</p>
      </div>
      <div class="containBottom">
        <ul>
          <li v-for="item in containBanner" class="containIcon">
            <img :src="item">
          </li>
        </ul>
        <div class="btns">
          <span @click="showDialog">加入购物车</span>
          <span>立即购买</span>
        </div>
      </div>
      <transition name="slide-up">
        <div class="dialog" v-show="isDialog" v-cloak @click="showDialog">
          <div class="dialogShow">
            <div class="dialogTop">
              <div class="dialogImg">
                <img :src="goods.GoodsImage" >
              </div>
              <div class="dialogText">
                <p>￥{{goods.GoodsPrice}}</p>
                <p>库存{{goods.GoodsNum}}件</p>
              </div>
            </div>
            <div class="dialogNumber">
              <span>购买数量</span>
              <div class="changeNumber">
                <b class="numberIcon" @click="operator('add')">+</b>
                <span>{{goods.GoodsBuyNum}}</span>
                <b class="numberIcon" @click="operator('reduce')">-</b>
              </div>
            </div>
            <div class="dialogComfirm" @click="addCart">
                <span>确定</span>
            </div>
          </div>
        </div>
      </transition>
      <div class="infoTab" v-show="infoShow">
        <span>添加成功，在购物车等亲~~</span>
      </div>
</div>
</template>

<script>
import {
  mapState,
  mapMutations
} from "vuex";
export default {
  data() {
    return {
      infoShow: false,
      isDialog: false,
      mainarea: false,
      containBanner: [
        require('../../assets/store.png'),
        require('../../assets/kefu.png'),
        require('../../assets/start.png'),
      ]
    }
  },
  watch: {
    infoShow() {
      if (this.infoShow) {
        setTimeout(() => {
          this.infoShow = false;
        }, 1000);
      }
    }
  },
  computed: {
    ...mapState({
      goods: 'goods'
    })
  },
  mounted() {
    this.mainarea = true;
  },
  methods: {
    ...mapMutations({
      setCarts: 'SET_CARTS'
    }),
    showDialog(event) {
      if (event.target == event.currentTarget) {
        this.isDialog = !this.isDialog;
      }
    },
    operator(oper) {
      if (oper == 'reduce') {
        this.goods.GoodsBuyNum = this.goods.GoodsBuyNum - 1 > 1 ? this.goods.GoodsBuyNum - 1 : 1;
      } else {
        this.goods.GoodsBuyNum++;
      }
    },
    addCart() {
      this.setCarts(this.goods);
      this.isDialog = false;
      setTimeout(() => {
        this.infoShow = true;
      }, 1000);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/less/baseconf.less";
.container {
    width: 100%;
    background-color: #fff;
}
.containTop {
    width: 100%;
}
.goodsImg {
    display: block;
    margin: 0 auto;
    width: 5rem;
}
.containMoney {
    font-size: 0.25rem;
    line-height: 0.35rem;
    color: @money_color;
}
.containMoney span {
    font-size: 0.35rem;
}
.conteinName {
    font-size: 0.30rem;
}
.containBottom {
    box-sizing: border-box;
    position: fixed;
    bottom: 0.88rem;
    width: 100%;
    height: 0.88rem;
    padding: 0.1rem 0;
    border-top: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden;
}
.containBottom ul {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}
.containIcon {
    display: inline-block;
    flex: 1 1 auto;
    width: 30%;
    height: 100%;
    text-align: center;
    cursor: pointer;
}
.containIcon img {
    height: 80%;
}
.btns {
    display: inline-flex;
    width: 57%;
    background-color: red;
    border-radius: 0.5rem;
    vertical-align: top;
    overflow: hidden;
}
.btns span {
    width: 50%;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    line-height: 0.63rem;
    border: 0;
    cursor: pointer;
    &:first-child {
        background: -webkit-linear-gradient(right,#ff9802,#ffc200);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right,#ff9802,#ffc200);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right,#ff9802,#ffc200);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(right,#ff9802,#ffc200);
    }
    &:last-child {
        background: -webkit-linear-gradient(right,#ff4e22,#ff7a00);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right,#ff4e22,#ff7a00);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right,#ff4e22,#ff7a00);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(right,#ff4e22,#ff7a00);
    }
}
.dialog {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}
.dialogShow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    background-color: #fff;
}
.dialogTop {
    height: 2rem;
    width: 90%;
    margin: 0 auto;
}
.dialogImg {
    display: inline-block;
    width: 2rem;
    height: 100%;
}
.dialogImg img {
    width: 100%;

    border-radius: 0.1rem;
}
.dialogText {
    display: inline-block;
    margin-left: 0.2rem;
    color: @money_color;
    font-size: 0.30rem;
    line-height: 0.30rem;
    vertical-align: top;
}
.dialogText p:last-child {
    color: #666;
}
.dialogNumber {
    width: 90%;
    margin: 0 auto;
    padding: 0.3rem 0;
    font-size: 0.40rem;

    border-bottom: 1px solid #666;
    overflow: hidden;
}

.dialogComfirm {
    position: fixed;
    bottom: 1.2rem;
    width: 90%;
    height: 0.8rem;
    margin-left: 5%;
    color: @base_color;
    font-size: 0.38rem;
    line-height: 0.8rem;
    letter-spacing: 0.1rem;
    text-align: center;
    border-radius: 0.4rem;
    background: -webkit-linear-gradient(right,#ff4e22,#ff852a);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#ff4e22,#ff852a);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#ff4e22,#ff852a);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(right,#ff4e22,#ff852a);
    cursor: pointer;
}
.infoTab {
    position: fixed;
    top: 60%;
    width: 100%;
    text-align: center;
    font-size: 0.30rem;
}
.infoTab span {
    display: inline-block;
    padding: 0.1rem 0.2rem;
    border-radius: 0.1rem;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>

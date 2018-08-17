<template lang="html">
  <div class="page" >
      <!-- content -->
      <transition :name="slidename">
          <div class="container" v-show="mainarea">
            <!-- swiper -->
            <carousel  :auto="3000" :responsive="40" :delta="5" style="margin-bottom: -5%;">
              <div v-for="slide in bannerList">
                  <img :src="slide.img" :key="slide.id" style="width:100%">
              </div>
            </carousel>
            <!-- icon list -->
            <icon-list :listItems="listItems"></icon-list>
            <!-- goods list v-cloak-->
            <div class="content" v-cloak>
              <div class="hot">
                <img :src="hotlike">
                <span>热门推荐</span>
              </div>
              <div class="listBox">
                <div class="goodsItem" v-for="(goods,index) in productList" :key="index"
                   @click="onGoodsDetail(goods)">
                    <img v-lazy="goods.GoodsImage" class="itemImg" />
                    <div class="itemText">
                      <span>{{goods.GoodsName}}</span>
                    </div>
                    <div class="itemBuy">
                      <p><span>￥{{goods.GoodsPrice}}</span></p>
                      <p><span>还剩{{goods.GoodsNum}}件</span></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </transition>
  </div>
</template>
<script>
import Carousel from 'vue-m-carousel'
import IconList from './base/IconList'
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'page',
  components: {
    Carousel,
    IconList
  },
  data() {
			return {
        hotlike: require("../assets/like.png"),
        listItems: [
          {
            id: 0,
            name: '天猫',
            src: require('../assets/listItems/tianmao.png'),
            to: 'https://www.tmall.com/'
          },
          {
            id: 1,
            name: '聚划算',
            src: require('../assets/listItems/juhuasuan.png'),
            to: 'https://jhs.m.taobao.com/'
          },
          {
            id: 2,
            name: '天猫国际',
            src: require('../assets/listItems/tianmaoNation.png'),
            to: 'https://pages.tmall.com/wow/jinkou/act/zhiying'
          },
          {
            id: 3,
            name: '外卖',
            src: require('../assets/listItems/waimai.png'),
            to: 'https://h5.m.taobao.com/app/waimai/index.html'
          },
          {
            id: 4,
            name: '天猫超市',
            src: require('../assets/listItems/supermarket.png'),
            to: 'https://chaoshi.m.tmall.com/'
          },
          {
            id: 5,
            name: '充值中心',
            src: require('../assets/listItems/chongzhi.png'),
            to: 'https://market.m.taobao.com/apps/recharge/home/home.html'
          },
          {
            id: 6,
            name: '飞猪',
            src: require('../assets/listItems/feizhu.png'),
            to: 'https://h5.m.taobao.com/app/triphome/pages/home/index.html'
          },
          {
            id: 7,
            name: '领金币',
            src: require('../assets/listItems/money.png'),
            to: 'https://market.m.taobao.com/apps/market/tjb/index.html'
          },
          {
            id: 8,
            name: '拍卖',
            src: require('../assets/listItems/pai.png'),
            to: 'https://market.m.taobao.com/apps/pm/paimai/index.html'
          },
          {
            id: 9,
            name: '分类',
            src: require('../assets/listItems/fenlei.png'),
            to: '#'
          }
        ],
				bannerList: [{
            "id": 0,
            "img": 'img'
        }],
				productList: [],
				slidename: 'slide-back',
				mainarea: false,
			}
	},
  computed: {
			...mapGetters([
				// 'carts',
        'comname'
			])
	},
  methods: {
    ...mapMutations({
				setGoods: 'SET_GOODS',
				// setCarts: 'SET_CARTS',
				// setTabindex: 'SET_TABINDEX',
				setComname: 'SET_COMNAME'
			}),
    // 获取轮播列表
    getBannerList(){
      this.$http.get('/api/bannerdata').then((res)=>{
        this.bannerList = res.data.data;
        console.log('获取轮播列表成功');
      }).catch((err)=>{
        console.error('获取轮播列表失败',err);
      });
    },
    // 获取商品列表
    getGoodsList(){
      this.$http.get('/api/recommend').then((res)=>{
        this.productList = res.data.data;
        console.log('获取商品列表成功');
      }).catch((err)=>{
        console.error('获取商品列表失败',err);
      })
    },
    // 进入商品详情页面
    onGoodsDetail(goods){
      this.$router.push({
        path: '/detail',
        query: {
          id: goods.CategoryId
        }
      });
      this.setGoods(item);
    }
  },
  mounted(){
    this.mainarea = true;
    this.getBannerList();
    this.getGoodsList();
    /*判断动画是进还是出*/
    if (this.comname == "category" || "cart" || "member") {
      this.slidename = "slide-back";
    } else {
      this.slidename = "slide-go";
    }
    this.setComname("index");
  }
}
</script>

<style lang="less" scoped>
@import "../../static/less/baseconf.less";
.container {
  width: 100%;
  padding-bottom: 0;
  overflow: hidden;
}
.content {
  padding-top: .2rem;
  margin-bottom: .78rem;//footer的高度减去margin-bottom的高度
  background-color: #f0f0f0;
}
.hot {
  color: @theme_color;
  font-size: .25rem;
  line-height: .60rem;
  text-align: center;
  background-color: #fff;
}
.hot img {
  height: .50rem;
  vertical-align: middle;
}
.listBox {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goodsItem {
  flex: 1 1 auto;
  width: 40%;
  margin-bottom: .1rem;
  background-color: #fff;
  cursor: pointer;
  &:nth-child(odd){
    margin-right: .1rem;
  }
}
.itemImg {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  min-height: 128px;//error图片的高度
  outline: none;
}
.itemText {
  margin-left: .2rem;
  font-size: .30rem;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
}
.itemBuy {
  overflow: hidden;
}
.itemBuy p {
  display: inline-block;
  margin: .1rem 0;
  &:first-child{
    margin-left: .2rem;
    color: @theme_color;
    font-size: .32rem;
    line-height: .32rem;
    float: left;
  }
  &:last-child{
    margin-right: .2rem;
    color: #666;
    line-height: .32rem;
    float: right;
  }
}
</style>

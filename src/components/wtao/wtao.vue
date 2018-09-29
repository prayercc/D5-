<template lang="html">
  <div class="wtao">
    <p class="back" @click="$router.go(-1)">&lt;&nbsp;返回</p>
    <div class="stores" v-for="(store,index) in stores" :key="index">
      <div class="storeName">
        <img :src="storeLogo" alt="logo">
        <span>{{store.busines.business_name}}</span>
      </div>
      <p>{{store.details}}</p>
      <div class="storeGoods">
        <img v-for="(goods,index) in store.cart" v-lazy="goods.GoodsImage" :alt="goods.GoodsName" :key="index" @click="onGoodsDetail(goods)">
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'wtao',
  created(){
    this.$http.get('/api/categorydata').then((res)=>{
      this.stores = res.data.data;
    }).catch((err)=>{
      console.error('获取商铺列表失败',err);
    })
  },
  data(){
    return {
      stores: null,
      storeLogo: require('../../assets/like.png')
    }
  },
  methods: {
    ...mapMutations({
      setGoods: 'SET_GOODS',
    }),
    onGoodsDetail(goods){
      this.setGoods(goods);
      this.$router.push({
        path: '/detail',
        query: {
          id: goods.CategoryId
        }
      });
    }
  }
}
</script>

<style lang="css" scoped>
.wtao {
  margin-bottom:1rem;
}
.stores {
  width: 90%;
  padding: .1rem .2rem;
  margin: .2rem auto 0 auto;
  font-size: .30rem;
  border-radius: .1rem;
  box-shadow: 1px 1px 5px #ddd;
  background-color: #fff;
}
.storeName {
  height: .90rem;
  width: 100%;
}
.storeName img {
  height: 100%;
}
.storeName span {
  font-size: .40rem;
  line-height: .90rem;
  vertical-align: top;
}
.storeGoods {
  display: flex;
  flex-wrap: wrap;
}
.storeGoods img {
  flex: 0 0 auto;
  width: 25%;
}
</style>

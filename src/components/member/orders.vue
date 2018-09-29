<template lang="html">
  <div class="orders">
    <div class="orderBoard">
      <ul>
        <router-link v-for="(nav,index) in navList" :key="index" :to="{ path: nav.path }" tag="li" active-class="active">
          {{ nav.name }}
        </router-link>
        <!-- <li v-for="nav in navList" active-class="active">{{nav.name}}</li> -->
      </ul>
    </div>
    <div class="orderShow">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data(){
    return {
      navList: [
        {
          name: '待付款',
          path:'dfk',
          active: true
        },
        {
          name: '待发货',
          path:'dfh',
          active: false
        },
        {
          name: '待收货',
          path:'dsh',
          active: false
        },
        {
          name: '待评价',
          path:'dpj',
          active: false
        },
        {
          name: '退款/售后',
          path:'sh',
          active: false
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.orderBoard {

}
.orderBoard ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
}
.orderBoard li {
  padding: .1rem .2rem;
  font-size: .25rem;
  line-height: .60rem;
}

.active{
  color: #ff4e22;
  border-bottom: 4px solid #ff4e22;
}
</style>

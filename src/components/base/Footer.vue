<template lang="html">
     <footer>
       <div class="footer-item" :class="{active:urlRouter == '/index' || urlRouter == '/'}">
          <router-link to='/index' tag="div">
            <i class="footerIcon homeIcon"></i>
            <p class="footerTitle">首页</p>
          </router-link>
       </div>
       <div class="footer-item" :class="{active: urlRouter == '/wtao'}">
         <router-link to='/wtao' tag="div">
           <i class="footerIcon wtaoIcon" ></i>
           <p class="footerTitle">微淘</p>
          </router-link>
       </div>
       <div class="footer-item" :class="{active: urlRouter == '/cart'}">
         <router-link to='/cart' tag="div">
           <i class="footerIcon cartIcon" ></i>
           <p class="footerTitle">购物车</p>
         </router-link>
       </div>
       <div class="footer-item" :class="{active: urlRouter == '/member'}">
         <router-link to='/member' tag="div">
           <i class="footerIcon memberIcon"></i>
           <p class="footerTitle">我的</p>
          </router-link>

       </div>
     </footer>
</template>

<script>
export default {
  props: {
    urlRouter:{
      type: String,
      default: '/index'
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/less/baseconf.less";
footer {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: .88rem;
    align-items: center;
    background: #fff;
    box-shadow: 0 -2px 5px #ddd;
}
.footer-item {
    position: relative;
    width: 25%;
    text-align: center;
}
.footer-item div {
  cursor: pointer;
}
.footerIcon {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 auto 0.1rem;
    background-size: 100% 100% !important;
}
.cart-num {
    position: absolute;
    background: @theme_background;
    color: @base_color;
    text-align: center;
    top: -0.2rem;
    right: 0.4rem;
    width: 0.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 0.8rem;
    margin: auto;
}

.homeIcon {
    background: url("../../assets/menu/home1.png");
}
.active .homeIcon {
    background: url("../../assets/menu/home2.png");
}

.wtaoIcon {
    background: url("../../assets/menu/wtao1.png");
}
.active .wtaoIcon {
    background: url("../../assets/menu/wtao2.png");
}

.cartIcon {
    background: url("../../assets/menu/cart1.png");
}
.active .cartIcon {
    background: url("../../assets/menu/cart2.png");
}

.memberIcon {
    background: url("../../assets/menu/user1.png");
}
.active .memberIcon {
    background: url("../../assets/menu/user2.png");
}

.footerTitle {
    margin: 0.1rem 0;
    color: @base_textColor;
}
.active .footerTitle {
    color: @theme_color;
}
</style>

<template>
  <div id="app">
    <!-- header-->
    <headers></headers>
    <!-- content -->
    <router-view/>
    <!-- footer -->
    <footers :urlRouter="$route.path" ref="footer"></footers>
  </div>
</template>

<script>
import "../static/js/rem.js";
import Headers from './components/base/Header'
import Footers from './components/base/Footer'
export default {
  name: 'App',
  components:{
    Headers,
    Footers
  },
  created(){
    localStorage.getItem("storeMsg") && this.$store.replaceState(
      Object.assign(
        this.$store.state,
        JSON.parse(localStorage.getItem("storeMsg"))
      )
    );
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storeMsg", JSON.stringify(this.$store.state));
    });
    console.log("加载/存储数据完成");
  }
}
</script>

<style lang="less">
@import "../static/less/base.less";
#app {
  height: 100%;
}
</style>

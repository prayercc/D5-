<template>
  <div id="app">
    <!-- content -->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!-- footer -->
    <footers :urlRouter="$route.path" ref="footer" ></footers>
  </div>
</template>

<script>
import "../static/js/rem.js";
import Footers from './components/base/Footer'
export default {
  name: 'App',
  components:{
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
    },false);
  }
}
</script>

<style lang="less">
@import "../static/less/base.less";

#app {
  height: 100%;
  background-color: #f0f0f0;
}
</style>

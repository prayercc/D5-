import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由懒加载,按需加载
const Index = (resolve)=>{
  import('@/components/index.vue').then((module)=>{
    resolve(module);
  })
}
const Wtao = (resolve) => {
  import('@/components/wtao/wtao.vue').then((module)=>{
    resolve(module);
  });
}
const Cart = (resolve)=> {
  import('@/components/cart/cart.vue').then((module)=>{
    resolve(module);
  });
}
const Member = (resolve)=> {
  import('@/components/member/member.vue').then((module)=>{
    resolve(module);
  })
}
const Detail = (resolve)=> {
  import('@/components/detail/detail.vue').then((module)=>{
    resolve(module);
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/wtao',
      component: Wtao
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})

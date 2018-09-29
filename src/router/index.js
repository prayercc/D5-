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
const Orders = (resolve)=>{
  import('@/components/member/orders.vue').then((module)=>{
    resolve(module);
  })
}
//二级路由
    const Dfk = (resolve)=>{
      import('@/components/member/items/dfk').then((module)=>{
        resolve(module);
      })
    }
    const Dfh = (resolve)=>{
      import('@/components/member/items/dfh').then((module)=>{
        resolve(module);
      })
    }
    const Dsh = (resolve)=>{
      import('@/components/member/items/dsh').then((module)=>{
        resolve(module);
      })
    }
    const Dpj = (resolve)=>{
      import('@/components/member/items/dpj').then((module)=>{
        resolve(module);
      })
    }
    const Sh = (resolve)=>{
      import('@/components/member/items/sh').then((module)=>{
        resolve(module);
      })
    }
    const OrderDetails = (resolve)=>{
      import('@/components/member/items/orderDetails').then((module)=>{
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
      component: Member,
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/orders',
      component: Orders,
      children: [
        {
          path: 'dfk',
          component: Dfk
        },
        {
          path: 'dfh',
          component: Dfh
        },
        {
          path: 'dsh',
          component: Dsh
        },
        {
          path: 'dpj',
          component: Dpj
        },
        {
          path: 'sh',
          component: Sh
        }
      ]
    },
    {
      path: '/orderDetails',
      component: OrderDetails
    }
  ]
})

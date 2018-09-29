// export const address = state =>state.address  //默认地址
// export const carts = state =>state.carts   //购物车
export const comname = state =>state.comname   //组件名字
// export const ordercur = state =>state.ordercur //当前订单下标

// export const goods = state =>state.goods   //当前商品详情
// export const orders = state =>state.orders  //所有订单
// export const pays = state =>state.pays     //当前支付
// export const chooseaddress = state =>state.chooseaddress //
// export const ischoose = state =>state.ischoose  //选择地址
// export const tabindex = state =>state.tabindex  //组件下标
// export const ordertab = state =>state.ordertab //订单下标
export const defaultAdd = state =>state.address.filter(item=>item.isDefault)

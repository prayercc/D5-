import * as conf from './mutation.conf'
const cartArr =[];
const addressArr = [];
let flag = true;
const matutaions = {
	/*当前商品详情*/
	[conf.SET_GOODS](state,goods){
		state.goods = goods;
	},
	/*购物车 过滤加入*/
	[conf.SET_CARTS](state,carts){
		state.carts.forEach((item,index,arr)=>{
			if(item.GoodsName === carts.GoodsName){
				arr[index].GoodsBuyNum += carts.GoodsBuyNum;
				flag = false;
			}
		});
		if(flag){
			state.carts.push(carts);
		}
	},
	/*清理购物车*/
	[conf.CLEAR_CARTS](state,goodsList){
		let new_tmp = new Array();
		for(let i=0;i<state.carts.length;i++){
				let flag = true;
				for(let j=0;j<goodsList.length;j++){
						if(state.carts[i].GoodsName == goodsList[j].GoodsName){
								flag = false;
						}
				}
				if(flag){
						new_tmp.push(state.carts[i]);
				}
		}
		state.carts = new_tmp;
	},
	/*订单*/
	[conf.SET_ORDERS](state,orders){
		state.orders.push(orders);;
	},
	/*当前支付*/
	[conf.SET_PAYS](state,pays){
		state.pays = pays;
	},
	[conf.CLEAR_PAYS](state){
		state.pays = [];
	},
	/*地址*/
	[conf.SET_ADDRESS](state,address){
		state.address.push(address);
		state.chooseaddress = address;
	 },
	/*选择地址*/
	// [conf.SET_CHOOSEADDRESS](state,chooseaddress){
	// 	state.chooseaddress = chooseaddress;
	// },
	/*是否选择购物地址*/
	// [conf.SET_ISCHOOSE](state,ischoose){
	// 	state.ischoose = ischoose;
	// },
	/*组件下标*/
	// [conf.SET_TABINDEX](state,tabindex){
	// 	state.tabindex = tabindex;
	// },
	/*组件名字*/
	[conf.SET_COMNAME](state,comname){
		state.comname = comname;
	},
	/*当前订单状态下标*/
	// [conf.SET_ORDERCUR](state,ordercur){
	// 	state.ordercur = ordercur;
	// },
	/*订单状态下标*/
	// [conf.SET_ORDERTAB](state,ordertab){
	// 	state.ordertab = ordertab;
	// }

}
 export default matutaions

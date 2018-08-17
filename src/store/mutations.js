import * as conf from './mutation.conf'
const cartArr =[];
const addressArr = [];
const matutaions = {
	/*商品详情*/
	[conf.SET_GOODS](state,goods){
		state.goods = goods;
	},
	/*购物车*/
	[conf.SET_CARTS](state,carts){
		cartArr.push(carts);
		state.carts = cartArr;
	},
	/*订单*/
	[conf.SET_ORDERS](state,orders){
		state.orders = orders;
	},
	/*支付*/
	[conf.SET_PAYS](state,pays){
		state.pays = pays;
	},
	/*地址*/
	[conf.SET_ADDRESS](state,address){
		addressArr.push(address);
		state.address = addressArr;
	},
	/*选择地址*/
	[conf.SET_CHOOSEADDRESS](state,chooseaddress){
		state.chooseaddress = chooseaddress;
	},
	/*是否选择购物地址*/
	[conf.SET_ISCHOOSE](state,ischoose){
		state.ischoose = ischoose;
	},
	/*组件下标*/
	[conf.SET_TABINDEX](state,tabindex){
		state.tabindex = tabindex;
	},
	/*组件名字*/
	[conf.SET_COMNAME](state,comname){
		state.comname = comname;
	},
	/*当前订单状态下标*/
	[conf.SET_ORDERCUR](state,ordercur){
		state.ordercur = ordercur;
	},
	/*订单状态下标*/
	[conf.SET_ORDERTAB](state,ordertab){
		state.ordertab = ordertab;
	}

}
 export default matutaions

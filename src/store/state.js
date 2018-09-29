const state = {
	address:[{
		name: '龙傲天',
		phone: '18830593725',
		detail: '湖北省 武汉市 洪山区 张家湾街道 白沙五路K3万科金色城市17地块1709',
		isDefault: true
	}], //默认地址
	carts:[{
        "CategoryId": "1",
        "GoodsName": "坚果夹心海苔",
        "GoodsPrice": 9,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_1.jpg"
  }],//购物车默认商品，设置空白页面后，可省略
	orders:[],
	goods: null,
	pays:[]
}
export default state

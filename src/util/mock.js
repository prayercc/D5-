//引入mockjs
const Mock = require('mockjs')
/*首页轮播*/
Mock.mock('/api/bannerdata', (req, res) => {
  return {
    data: [{
        "id": "1",
        "img": "http://localhost:8080/static/img/swiper/swipe1.jpg"
      },
      {
        "id": "2",
        "img": "http://localhost:8080/static/img/swiper/swipe2.jpg"
      },
      {
        "id": "3",
        "img": "http://localhost:8080/static/img/swiper/swipe3.jpg"
      },
      {
        "id": "4",
        "img": "http://localhost:8080/static/img/swiper/swipe4.jpg"
      },
      {
        "id": "5",
        "img": "http://localhost:8080/static/img/swiper/swipe5.jpg"
      },
      {
        "id": "6",
        "img": "http://localhost:8080/static/img/swiper/swipe6.jpg"
      }
    ]
  }
});
// 首页
Mock.mock('/api/recommend', (req, res) => {
  return {
    data: [{
        "CategoryId": "1",
        "GoodsName": "坚果夹心海苔",
        "GoodsPrice": 9,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "卤汁牛肉",
        "GoodsPrice": 32,
        "GoodsNum": 15,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "乐奈牛奶燕麦巧克力",
        "GoodsPrice": 78,
        "GoodsNum": 112,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "牛轧糖",
        "GoodsPrice": 59,
        "GoodsNum": 11,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "苏打饼干 ",
        "GoodsPrice": 61,
        "GoodsNum": 22,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "可可威化饼干",
        "GoodsPrice": "22",
        "GoodsNum": 654,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "粒粒鲜果冻 ",
        "GoodsPrice": 59,
        "GoodsNum": 23,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "葡萄果汁软糖",
        "GoodsPrice": 9,
        "GoodsNum": 3,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "夏威夷果",
        "GoodsPrice": 189,
        "GoodsNum": 12,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "坚果混合",
        "GoodsPrice": 9,
        "GoodsNum": 14,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "风味虾片 ",
        "GoodsPrice": 199,
        "GoodsNum": 143,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "大胡子烧烤味薯片",
        "GoodsPrice": 28,
        "GoodsNum": 1234,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_2.jpg"
      },
      {
        "CategoryId": "3",
        "GoodsName": "冲绳黑糖",
        "GoodsPrice": 18,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_3.jpg"
      },
      {
        "CategoryId": "4",
        "GoodsName": "牛奶抹茶糖",
        "GoodsPrice": 22,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_4.jpg"
      },
      {
        "CategoryId": "5",
        "GoodsName": "苹果味糖果",
        "GoodsPrice": 59,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_5.jpg"
      },
      {
        "CategoryId": "6",
        "GoodsName": "松露巧克力",
        "GoodsPrice": 59,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_6.jpg"
      },
      {
        "CategoryId": "3",
        "GoodsName": "青豌豆",
        "GoodsPrice": 8,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_3.jpg"
      },
      {
        "CategoryId": "4",
        "GoodsName": "薯条脆",
        "GoodsPrice": 12,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_4.jpg"
      },
      {
        "CategoryId": "5",
        "GoodsName": "小米锅巴",
        "GoodsPrice": 50,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_5.jpg"
      },
      {
        "CategoryId": "6",
        "GoodsName": "碳烤牛肉",
        "GoodsPrice": 80,
        "GoodsNum": 10,
        "GoodsBuyNum": 1,
        "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_6.jpg"
      }
    ]
  }
})
/*微淘*/
// Mock.mock('/api/homedata', (req, res) => {
//   return {
//     data: [{
//         "Category": {
//           "Id": "1",
//           "TopText": "休闲零食",
//           "TopNum": "one"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "坚果夹心海苔",
//             "GoodsPrice": 9,
//             "GoodsNum": 10,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "卤汁牛肉",
//             "GoodsPrice": 32,
//             "GoodsNum": 15,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_2.jpg"
//           }
//         ]
//       },
//       {
//         "Category": {
//           "Id": "2",
//           "TopText": "糖果·巧克力",
//           "TopNum": "two"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "乐奈牛奶燕麦巧克力 ",
//             "GoodsPrice": 78,
//             "GoodsNum": 112,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "牛轧糖",
//             "GoodsPrice": 59,
//             "GoodsNum": 11,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_2.jpg"
//           }
//         ]
//       },
//       {
//         "Category": {
//           "Id": "3",
//           "TopText": "饼干·糕点",
//           "TopNum": "three"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "苏打饼干 ",
//             "GoodsPrice": 61,
//             "GoodsNum": 22,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "可可威化饼干",
//             "GoodsPrice": "22",
//             "GoodsNum": 654,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_2.jpg"
//           }
//         ]
//       },
//       {
//         "Category": {
//           "Id": "4",
//           "TopText": "果冻·布丁",
//           "TopNum": "four"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "粒粒鲜果冻 ",
//             "GoodsPrice": 59,
//             "GoodsNum": 23,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "葡萄果汁软糖",
//             "GoodsPrice": 9,
//             "GoodsNum": 3,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_2.jpg"
//           }
//         ]
//       },
//       {
//         "Category": {
//           "Id": "5",
//           "TopText": "坚果·炒货",
//           "TopNum": "five"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "夏威夷果",
//             "GoodsPrice": 189,
//             "GoodsNum": 12,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "坚果混合",
//             "GoodsPrice": 9,
//             "GoodsNum": 14,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_2.jpg"
//           }
//         ]
//       },
//       {
//         "Category": {
//           "Id": "6",
//           "TopText": "膨化·薯片",
//           "TopNum": "six"
//         },
//         "SalesProduct": [{
//             "CategoryId": "1",
//             "GoodsName": "风味虾片 ",
//             "GoodsPrice": 199,
//             "GoodsNum": 143,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_1.jpg"
//           },
//           {
//             "CategoryId": "2",
//             "GoodsName": "大胡子烧烤味薯片",
//             "GoodsPrice": 28,
//             "GoodsNum": 1234,
//             "GoodsBuyNum": 1,
//             "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_2.jpg"
//           }
//         ]
//       }
//     ]
//   }
// })
/*分类菜单*/
// Mock.mock('/api/menudata', (req, res) => {
//   return {
//     data: [{
//         "cat_name": "休闲零食"
//       },
//       {
//         "cat_name": "糖果·巧克力"
//       },
//       {
//         "cat_name": "饼干·糕点"
//       },
//       {
//         "cat_name": "果冻·布丁"
//       },
//       {
//         "cat_name": "坚果·炒货"
//       },
//       {
//         "cat_name": "膨化·薯片"
//       }
//     ]
//   }
// })
/*分类详情*/
Mock.mock('/api/categorydata', (req, res) => {
  return {
    data: [
      {
        "busines": {
          "business_id": 1,
          "business_name": "休闲零食"
        },
        "details":"唯有爱和美食不可辜负！",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "坚果夹心海苔",
            "GoodsPrice": 66,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "卤汁牛肉",
            "GoodsPrice": 88,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "青豌豆",
            "GoodsPrice": 8,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "薯条脆",
            "GoodsPrice": 12,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "小米锅巴",
            "GoodsPrice": 50,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "碳烤牛肉",
            "GoodsPrice": 80,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_one_6.jpg"
          }
        ]
      },
      {
        "busines": {
          "business_id": 2,
          "business_name": "糖果巧克力"
        },
        "details":"唯有爱和美食不可辜负！",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "乐奈牛奶燕麦巧克力 ",
            "GoodsPrice": 78,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "牛轧糖",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "冲绳黑糖",
            "GoodsPrice": 18,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "牛奶抹茶糖",
            "GoodsPrice": 22,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "苹果味糖果",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "松露巧克力",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_two_6.jpg"
          }
        ]
      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "饼干糕点"
        },
        "details":"唯有爱和美食不可辜负！",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "苏打饼干 ",
            "GoodsPrice": 61,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "可可威化饼干",
            "GoodsPrice": "22",
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_three_2.jpg"
          }
        ]
      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "果冻布丁"
        },
        "details":"唯有爱和美食不可辜负！",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "粒粒鲜果冻 ",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "葡萄果汁软糖",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_four_2.jpg"
          }
        ],
      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "坚果炒货"
        },
        "details":"唯有爱和美食不可辜负！",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "夏威夷果",
            "GoodsPrice": 189,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "坚果混合",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_five_2.jpg"
          }
        ]
      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "膨化薯片"
        },
        "details":"唯有爱和美食不可辜负",
        "cart": [{
            "CategoryId": "1",
            "GoodsName": "风味虾片 ",
            "GoodsPrice": 199,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "大胡子烧烤味薯片",
            "GoodsPrice": 28,
            "GoodsNum": 1,
            "GoodsBuyNum": 1,
            "GoodsImage": "http://localhost:8080/static/img/goods/home_floor_six_2.jpg"
          }
        ]
      }
    ]
  }
})

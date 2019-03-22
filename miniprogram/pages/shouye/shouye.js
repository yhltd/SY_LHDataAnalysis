// pages/shouye/shouye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item1: ['红桃', '方片', '黑桃', '草花'],
    item2: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
   ,
   index: 0,
    multiArray: [['红桃', '方片', '黑桃', '草花'], ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '红桃'
        },
        {
          id: 1,
          name: '方片'
        }
        ,
        {
          id: 2,
          name: '黑桃'
        }
        ,
        {
          id: 3,
          name: '草花'
        }
      ], [
        {
          id: 0,
          name: 'A'
        },
        {
          id: 1,
          name: '2'
        },
        {
          id: 2,
          name: '3'
        },
        {
          id: 3,
          name: '4'
        },
        {
          id: 4,
          name: '5'
        },
        {
          id: 5,
          name: '6'
        },
        {
          id: 6,
          name: '7'
        },
        {
          id: 7,
          name: '8'
        },
        {
          id: 8,
          name: '9'
        },
        {
          id: 9,
          name: '10'
        },
        {
          id: 10,
          name: 'J'
        },
        {
          id: 11,
          name: 'Q'
        },
        {
          id: 12,
          name: 'K'
        }
      ]
    ],
    multiIndex: [0,  0],


  },
  bindMultiPickerColumnChange: function (e) {
    var that=this
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
      
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            
            break;
          
        }
        data.multiIndex[1] = 0;
      
        break;
      
       
    }
    this.setData(data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this
  
    //定义一个字符串数组
    var obj = wx.getStorageSync("openid")
    var idd = that.data.id;
    var openid = obj.openid;
    console.log(openid)
  },
qingkong:function(){

},
jisuan:function(){
  var zhuang1,zhuang2,zhuang3,xian1,xian2,xian3
  zhuang1 = 1;
  zhuang2 = 6;
  zhuang3 = 1;
  xian1 = 2;
  xian2 = 5;
  xian3 = 2;


  if (zhuang1 + zhuang2 == 8 | zhuang1 + zhuang2 == 9)
  {
    if (xian1 + xian2 !== 8 | xian1 + xian2 !== 9) 
    {
      console.log("庄家赢")
    }
    if (xian1 + xian2 == 8 | xian1 + xian2 == 9) {
      if(zhuang3>xian3 ){

        console.log("庄家赢")
      }

      if (zhuang3 < xian3) {
        console.log("闲家赢")
      }
      if (zhuang3 = xian3) {
        console.log("平局")
      }
    }
   }
  else if (xian1 + xian2 == 8 | xian1 + xian2 == 9){
    console.log("闲家赢")
  }
  else if (zhuang3 > xian3) {

    console.log("庄家赢")
  }
  else if (zhuang3 < xian3) {

    console.log("闲家赢")
  }
  else  {
    console.log("平局")
  }
  

  


}  , 
    


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  luru:function() {
    var that =this;
    db.collection('SY_LHDataAnalysis_shuju').add({
     
      data: {
        // openid:openid,
        // shuju1:shuju1,
        // shuju2: shuju2,
        // shuju3: shuju3,
        // shuju4: shuju4,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
        
          
        })
        wx.showToast({
          title: '录入成功',
        })
    }
      })
     
      }
})

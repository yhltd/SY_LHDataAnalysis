// pages/shouye/shouye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
    hiddenName2: true,
    hiddenName3: true,
    hiddenName4: true,
    hiddenName5: true,
    hiddenName6: true,
    idd:0,
    idd2: 0,
    idd3: 0,
    idd4: 0,
    idd5: 0,
    idd6: 0,
    id: 0,
    id2: 0,
    id3: 0,
    id4: 0,
    id5: 0,
    id6: 0,
  },

  clickMe: function (e) {
   var idd = e.target.id
    console.log(idd)
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  click: function (e) {
    var id = e.target.id
    var idd = e.target.dataset.id
    console.log(id)
    console.log(idd)
    this.setData({
      hiddenName: !this.data.hiddenName,
      id:id,
      idd: idd,
    })
  },
   clickMe2: function (e) {
   
    this.setData({
      hiddenName2: !this.data.hiddenName2
    }  )
  },
  click2: function (e) {
    var id2 = e.target.id
    var idd2 = e.target.dataset.id
    console.log(id2)
    this.setData({
      hiddenName2: !this.data.hiddenName2,
      id2:id2,
      idd2: idd2,
    })
  },
  clickMe3: function (e) {

    this.setData({
      hiddenName3: !this.data.hiddenName3
    })
  },
  click3: function (e) {
    var id3 = e.target.id
    var idd3 = e.target.dataset.id
    console.log(id3)
    this.setData({
      hiddenName3: !this.data.hiddenName3,
      id3: id3,
      idd3:idd3
    })
  },
  clickMe4: function (e) {

    this.setData({
      hiddenName4: !this.data.hiddenName4
    })
  },
  click4: function (e) {
    var id4 = e.target.id
    var idd4 = e.target.dataset.id
    console.log(id4)
    this.setData({
      hiddenName4: !this.data.hiddenName4,
      id4: id4,
      idd4:idd4
    })
  },
  clickMe5: function (e) {

    this.setData({
      hiddenName5: !this.data.hiddenName5
    })
  },
  click5: function (e) {
    var id5 = e.target.id
    var idd5 = e.target.dataset.id
    console.log(id5)
    this.setData({
      hiddenName5: !this.data.hiddenName5,
      id5: id5,
      idd5:idd5
    })
  },
  clickMe6: function (e) {

    this.setData({
      hiddenName6: !this.data.hiddenName6
    })
  },
  click6: function (e) {
    var id6 = e.target.id
    var idd6 = e.target.dataset.id
    console.log(id6)
    this.setData({
      hiddenName6: !this.data.hiddenName6,
      id6: id6,
      idd6:idd6
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this

    var adminis = app.globalData.adminis
    var finduser = app.globalData.finduser

    console.log(adminis)
    console.log(finduser)

    app.editTabBar1(); //底部栏
    //定义一个字符串数组
    var obj = wx.getStorageSync("openid")
    var idd = that.data.id;
    var openid = obj.openid;
    console.log(openid)
  },
qingkong:function(){
  var that = this
  that.setData({
    id:"",
    id2:"",
    id3: "",
    id4: "",
    id5: "",
    id6: "",


  })
},
jisuan:function(){
  

  


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
    var shuju7='0'
    var that =this;
    var finduser = app.globalData.finduser
    const db = wx.cloud.database();
    
     var zhuang1, zhuang2, zhuang3, xian1, xian2, xian3
    zhuang1 = parseInt(that.data.id);
    zhuang2 = parseInt(that.data.id2);
    zhuang3 = parseInt(that.data.id5);
    xian1 = parseInt(that.data.id3);
    xian2 = parseInt(that.data.id4);
    xian3 = parseInt(that.data.id6);
    console.log(zhuang1 + zhuang2)
    console.log(xian1 + xian2)
    console.log(zhuang3)
    console.log(xian3)
      if (zhuang1 + zhuang2 == 8 || zhuang1 + zhuang2 == 9) {
        if (xian1 + xian2 !== 8 || xian1 + xian2 !== 9) {
          console.log("庄家赢")
          shuju7 = "庄"
        }
        if (xian1 + xian2 == 8 || xian1 + xian2 == 9) {
          if (zhuang3 > xian3) {

            console.log("庄家赢")
            shuju7 = "庄"
          }

          if (zhuang3 < xian3) {
            console.log("闲家赢")
            shuju7 = "闲"
          }
          if (zhuang3 = xian3) {
            console.log("平局")
            shuju7 = "平"
          }
        }
      }
      else if (xian1 + xian2 == 8 || xian1 + xian2 == 9) {
        console.log("闲家赢")
        shuju7 = "闲"
      }
      
      else if (zhuang1 + zhuang2 == xian1 + xian2 && zhuang3 == xian3) {
        console.log("平局")
        shuju7 = "平"
      }

      else if (zhuang3 > xian3) {

        console.log("庄家赢")
        shuju7 = "庄"
      }
      else if (zhuang3 < xian3) {

        console.log("闲家赢")
        shuju7 = "闲"
      }
      else if (zhuang3 == xian3) {

        console.log("平局")
        shuju7 = "平"
      }



     db.collection('SY_LHDataAnalysis_shuju').add({
     
      data: {
       
        shuju1:that.data.idd,
        shuju2: that.data.idd2,
        shuju3: that.data.idd3,
        shuju4: that.data.idd4,
        shuju5: that.data.idd5,
        shuju6: that.data.idd6,
        shuju7: shuju7,
       finduser : finduser
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
    this.qingkong()
   }
})

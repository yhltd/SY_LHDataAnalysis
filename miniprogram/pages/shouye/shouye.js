// pages/shouye/shouye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this
    const db = wx.cloud.database();
    db.collection('SY_LHDataAnalysis').doc('XJBD6OSiwXKAQr15').get({
      success(res) {
       
        console.log(res.data)
      }
    })
    //定义一个字符串数组
    var obj = wx.getStorageSync("openid")
    var idd = that.data.id;
    var openid = obj.openid;
    console.log(openid)
  },

   
    


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

  }
})
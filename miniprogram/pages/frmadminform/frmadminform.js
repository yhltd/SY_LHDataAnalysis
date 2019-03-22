// miniprogram/pages/frmadminform/frmadminform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'lock', value: '锁定' },
      { name: 'unlock', value: '正常', checked: 'true' },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //事件处理函数
  searchBox: function (e) {
    // wx.showToast({
    //   title: 'jj' ,
    //   icon: 'success',
    //   duration: 2000
    // }) 
    const that = this;
    var uname, pass, pass2;
    uname = e.detail.value.username,
      pass = e.detail.value.pwd ,
    pass2 = e.detail.value.pwd2 
    if (pass2 != pass )
    {
      wx.showToast({
        title: '两次密码不一致，请修改',
        icon: 'success',
        duration: 2000
      })
      return
    }
    if ( uname == "" || pass == "")
    {
      wx.showToast({
        title: '数据不能为空！',
        icon: 'success',
        duration: 2000
      })
        return
    }


    
    
  },
  
  btcanel: function () {
      wx.navigateBack({

      })
  },

    radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
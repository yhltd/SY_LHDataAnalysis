// miniprogram/pages/frmadminindex/frmadminindex.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    department: [{
      tag: "新建",
      icon: "pifuke color1"
    }, {
      tag: "查看",
      icon: "tuina color2"
    }],
    searchDoctor: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const db = wx.cloud.database();
    db.collection('SY_LHDataAnalysis_user').doc('XJuFPYnnuWjci0CF').get({
      success(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var listAll = [];
    const db = wx.cloud.database();
    db.collection('SY_LHDataAnalysis_user').get({
      success(res) {
        listAll.push(res.data)
        that.setData({
            listAll: listAll[0]
          },
          console.log(listAll)
        )
      }
    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  searchFocus: function() {
    this.setData({
      searchClass: "inputFocus"
    });
  },
  searchBlur: function() {
    this.setData({
      searchClass: ""
    })
  },

  searchKey: function(e) {

    // 节流算法
    change && clearTimeout(change);

    change = setTimeout(() => {
      change = null;
      let val = e.detail.value;
      val && a.request({
        "doc_name": val,
        "depId": -1,
        "subdepId": -1
      }, "searchDoctor", data => {
        data = data.data;
        if (typeof data == "object") {
          data.map && data.map(res => {
            res.split = res.name.split(val);
            res.key = val;
            return res;
          });
          this.setData({
            searchDoctor: data
          });
        }
      });
    }, 500);
  },
  navgiate: function() {

    wx.navigateTo({
      url: "/pages/frmadminform/frmadminform"
    });

  },
  bindAll:function(e){


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
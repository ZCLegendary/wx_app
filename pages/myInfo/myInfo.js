
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    sign: "talk is cheap,show me the code"
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    app.getUserInfo(function(userInfo){

      that.setData({
        userInfo:userInfo
      })
    })
  },

  click_to_myInfo: function () {

    wx.navigateTo({
      url: "myDetail/myDetail" 
    })
  },

   click_to_myLocation: function () {

    wx.navigateTo({
      url: "myLocation/myLocation" 
    })


  }


})
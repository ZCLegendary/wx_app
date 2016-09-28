Page({
  data:{
    // text:"这是一个页面"
  },

  











  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.getLocation({
    type: 'wgs84',
    success: function(res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy

    console.log("经度:"+ latitude+" 维度:" +longitude)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28
    })

  }
})


  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
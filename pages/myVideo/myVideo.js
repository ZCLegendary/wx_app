Page({

collect: function(e) {


    
      console.log("收藏");
      wx.setStorage ({
          key: "哈哈哈",
          data: "http://baobab.wandoujia.com/api/v1/playUrl?vid=7798&editionType=default"
      })


},

onLoad: function() {
    console.log("视频播放");
    wx.getStorage ({
        key: "哈哈哈",
        success: function(res) {
            if(res.data)
            console.log("本地收藏的数据:" + res.data);
        }
    })

}



})
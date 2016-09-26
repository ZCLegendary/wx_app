
Page({

    data:{

//swiper datas
    image_one: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
//swiper settings    
    indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,  

//body
     datas: [],
//modal     
     modalHidden: true,
//loading
     hide: false,     

//data end
},


//view load
onLoad :function() {

 var self = this;
console.log("begin load");
//network request
wx.request( {
      url: 'http://baobab.wandoujia.com/api/v1/videos?start=0&num=10&categoryName=旅行&strategy=shareCount',
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        // start: '0',
        // num: '10',
        // categoryName: '旅行',
        // strategy: 'shareCount'
      },
      success: function( res ) {
        //get data 
        var newData = res.data;
        console.log( newData.videoList );
        self.setData( {
          datas: newData.videoList
        })
        self.update()

        setTimeout (function () {
          self.setData({
          hide: true
        })
        }, 500)
      }
    });
},


// scrollView EventHandler
     upper: function(e) {
         console.log(e)
      },
    lower: function(e) {
          console.log(e)
      },
    scroll: function(e) {
  	     console.log(e)
      }, 

 //click_to_Video
 click_to_Video :function(prama) {
    console.log("跳转");
    var menuItem = this.data.datas[parseInt(prama.currentTarget.id)] 
    console.log(prama);

    wx.navigateTo({
      url: '../myVideo/myVideo' ,
      success: function () {
        console.log("点击了第" + prama.currentTarget.id + "个" + menuItem.title + "播放地址:" + menuItem.playUrl);
      }});

 },

//modal changed
   modalChange: function(e) {
    this.setData({
      modalHidden: true
    })}


})




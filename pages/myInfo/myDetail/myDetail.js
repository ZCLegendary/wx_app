Page({
  data: {
    // animationData: {}
  },
   onReady: function(){
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-out',
    })
    this.animation = animation

   
    animation.scale(1.2,1.2).step()
    animation.rotate(Math.random() * 720 - 360).step()
    
    this.setData({
      animationData:animation.export()
    })


   setTimeout(function() {
      animation.translate(0,0).scale(1,1).rotate(0,0).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 3000)







     


  },

  animationTap: function () {

      

  }



})
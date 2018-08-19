Page({
  data: {
    imgUrls: ["/image/b1.jpg", "/image/b2.jpg", "/image/b3.jpg"],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    isLogined: false
  },
  onLoad() {
    this.setData({
      isLogined: wx.getStorageSync("isLogined")
        ? wx.getStorageSync("isLogined")
        : false
    });
  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      console.log(e.detail.userInfo);
      wx.setStorageSync("userInfo", e.detail.userInfo);
      wx.setStorageSync("isLogined", true);
      this.setData({
        isLogined: true
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: "警告",
        content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
        showCancel: false,
        confirmText: "返回授权",
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击了“返回授权”");
          }
        }
      });
    }
  }
});

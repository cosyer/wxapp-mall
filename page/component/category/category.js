Page({
  data: {
    category: [
      { name: "果味", id: "guowei" },
      { name: "蔬菜", id: "shucai" },
      { name: "炒货", id: "chaohuo" },
      { name: "点心", id: "dianxin" },
      { name: "粗茶", id: "cucha" },
      { name: "淡饭", id: "danfan" }
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: "guowei"
  },
  onReady() {
    var self = this;
    self.setData({
      detail: [
        {
          id: "guowei",
          banner: "/image/c1.png",
          cate: "果味",
          detail: [
            { thumb: "/image/c2.png", name: "梨花带雨 3个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c2.png", name: "梨花带雨 3个" }
          ]
        },
        {
          id: "shucai",
          banner: "/image/c1.png",
          cate: "蔬菜",
          detail: [
            { thumb: "/image/s4.png", name: "瓜子 3个" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s4.png", name: "瓜子 4个" }
          ]
        },
        {
          id: "chaohuo",
          banner: "/image/c1.png",
          cate: "炒货",
          detail: [
            { thumb: "/image/c2.png", name: "梨花带雨 3个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c2.png", name: "梨花带雨 3个" }
          ]
        },
        {
          id: "dianxin",
          banner: "/image/c1.png",
          cate: "点心",
          detail: [
            { thumb: "/image/s4.png", name: "瓜子 3个" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s4.png", name: "瓜子 4个" }
          ]
        },
        {
          id: "cucha",
          banner: "/image/c1.png",
          cate: "粗茶",
          detail: [
            { thumb: "/image/c2.png", name: "梨花带雨 3个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c4.png", name: "奇异果 2个" },
            { thumb: "/image/c3.png", name: "红枣 500g" },
            { thumb: "/image/c2.png", name: "梨花带雨 3个" }
          ]
        },
        {
          id: "danfan",
          banner: "/image/c1.png",
          cate: "淡饭",
          detail: [
            { thumb: "/image/s4.png", name: "瓜子 3个" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s6.png", name: "小米" },
            { thumb: "/image/s5.png", name: "芹菜 500g" },
            { thumb: "/image/s4.png", name: "瓜子 4个" }
          ]
        }
      ]
    });
    // wx.request({
    //   url: "http://www.gdfengshuo.com/api/wx/cate-detail.txt",
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     });
    //   }
    // });
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    });
    setTimeout(function() {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      });
    }, 0);
    setTimeout(function() {
      self.setData({
        isScroll: false
      });
    }, 1);
  }
});

// pages/foodcontent/foodcontent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    host:'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(options.id);
  },
  requestData(id){
    var that = this
    var api = 'http://a.itying.com/api/productcontent?id='+id; 
    wx.request({
      url: api,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        const data = res.data.result[0]
        //替换服务器images路径的 \
        data.img_url = data.img_url.replace(/\\/g,'/')
        that.setData({
          list: data
        })
      }
    })
  }
})
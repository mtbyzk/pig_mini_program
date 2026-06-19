// pages/agreement/agreement.js
Page({
  data: {
    updateTime: '2024年1月1日'
  },

  onLoad() {
    console.log('Agreement page loaded')
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 用户协议',
      path: '/pages/agreement/agreement'
    }
  }
})

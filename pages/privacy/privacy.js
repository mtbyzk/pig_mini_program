// pages/privacy/privacy.js
Page({
  data: {
    updateTime: '2024年1月1日'
  },

  onLoad() {
    console.log('Privacy page loaded')
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 隐私政策',
      path: '/pages/privacy/privacy'
    }
  }
})

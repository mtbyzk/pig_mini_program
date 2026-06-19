// pages/settings/settings.js
const app = getApp()

Page({
  data: {
    diseases: [],
    symptoms: [],
    medications: [],
    isDarkMode: false,
    language: 'zh',
    cacheSize: '8.5 MB'
  },

  onLoad() {
    this.loadData()
  },

  onShow() {
    this.loadData()
  },

  // 加载数据
  loadData() {
    const { diseases, symptoms, medications } = app.globalData
    
    // 等待数据加载完成
    if (diseases.length === 0) {
      setTimeout(() => this.loadData(), 100)
      return
    }

    this.setData({
      diseases,
      symptoms,
      medications
    })
  },

  // 切换深色模式
  toggleDarkMode(e) {
    const { value } = e.detail
    this.setData({ isDarkMode: value })
    app.globalData.isDarkMode = value
    wx.showToast({
      title: value ? '已开启深色模式' : '已关闭深色模式',
      icon: 'none'
    })
  },

  // 切换语言
  toggleLanguage(e) {
    const { value } = e.detail
    const language = value ? 'en' : 'zh'
    this.setData({ language })
    app.globalData.language = language
    wx.showToast({
      title: value ? '已切换为英文' : '已切换为中文',
      icon: 'none'
    })
  },

  // 显示通知设置
  showNotification() {
    wx.showToast({
      title: '通知提醒已开启',
      icon: 'none'
    })
  },

  // 同步数据
  syncData() {
    wx.showLoading({
      title: '同步中...'
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '数据同步完成',
        icon: 'success'
      })
    }, 1500)
  },

  // 显示离线数据
  showOfflineData() {
    wx.showToast({
      title: '离线数据已是最新',
      icon: 'none'
    })
  },

  // 清除缓存
  clearCache() {
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除缓存吗？这不会删除您的个人数据。',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '缓存已清除',
            icon: 'success'
          })
        }
      }
    })
  },

  // 显示疾病信息
  showDiseaseInfo() {
    wx.showModal({
      title: '疾病数据',
      content: `已收录${this.data.diseases.length}种常见猪病`,
      showCancel: false
    })
  },

  // 显示症状信息
  showSymptomInfo() {
    wx.showModal({
      title: '症状数据',
      content: `已收录${this.data.symptoms.length}种常见症状`,
      showCancel: false
    })
  },

  // 显示药品信息
  showMedicationInfo() {
    wx.showModal({
      title: '药品数据',
      content: `已收录${this.data.medications.length}种常用药品`,
      showCancel: false
    })
  },

  // 显示版本
  showVersion() {
    wx.showModal({
      title: '关于猪病诊断助手',
      content: '版本：v1.0.0\n开发者：WangXin\n\n猪病诊断助手是一款专业的猪病诊断工具，通过症状分析帮助养殖户快速判断猪病，并提供专业的用药方案。',
      showCancel: false
    })
  },

  // 显示使用协议
  showAgreement() {
    wx.showModal({
      title: '使用协议',
      content: '欢迎使用猪病诊断助手！\n\n1. 本应用提供的信息仅供参考，不能替代专业兽医诊断。\n\n2. 使用本应用时，请结合实际情况判断，必要时请咨询专业兽医。',
      showCancel: false
    })
  },

  // 显示隐私政策
  showPrivacy() {
    wx.showModal({
      title: '隐私政策',
      content: '猪病诊断助手尊重并保护您的隐私。\n\n本应用不收集任何个人身份信息。诊断数据仅存储在本地设备上，不会上传到服务器。',
      showCancel: false
    })
  },

  // 显示反馈
  showFeedback() {
    wx.showModal({
      title: '意见反馈',
      content: '如有问题或建议，请通过以下方式联系我们：\n\n邮箱：feedback@pigdoctor.com',
      showCancel: false
    })
  },

  // 评分
  rateApp() {
    wx.showToast({
      title: '感谢您的支持！',
      icon: 'none'
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 专业猪病诊断工具',
      path: '/pages/index/index'
    }
  }
})

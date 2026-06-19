// pages/index/index.js
const app = getApp()

Page({
  data: {
    diseases: [],
    symptoms: [],
    medications: [],
    highSeverityDiseases: []
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

    // 获取高危疾病
    const highSeverityDiseases = diseases
      .filter(d => d.severity === 'high')
      .slice(0, 5)

    this.setData({
      diseases,
      symptoms,
      medications,
      highSeverityDiseases
    })
  },

  // 跳转到诊断页面
  goToDiagnosis() {
    wx.switchTab({
      url: '/pages/encyclopedia/encyclopedia'
    })
  },

  // 跳转到疾病百科
  goToEncyclopedia() {
    wx.switchTab({
      url: '/pages/encyclopedia/encyclopedia'
    })
  },

  // 跳转到疾病详情
  goToDiseaseDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${id}`
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

// pages/disease-detail/disease-detail.js
const app = getApp()

Page({
  data: {
    diseaseId: '',
    disease: {}
  },

  onLoad(options) {
    const { id } = options
    
    if (id) {
      this.setData({ diseaseId: id })
      this.loadDiseaseData(id)
    }
  },

  // 加载疾病数据
  loadDiseaseData(diseaseId) {
    const disease = app.getDiseaseById(diseaseId)

    if (disease) {
      this.setData({ disease })
    }
  },

  // 跳转到治疗方案
  goToTreatment() {
    const { diseaseId } = this.data
    wx.navigateTo({
      url: `/pages/treatment/treatment?diseaseId=${diseaseId}`
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: `猪病诊断助手 - ${this.data.disease.name}`,
      path: '/pages/index/index'
    }
  }
})

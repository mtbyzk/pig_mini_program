// pages/disease-detail/disease-detail.js
const app = getApp()

Page({
  data: {
    diseaseId: '',
    disease: {},
    loading: true
  },

  onLoad(options) {
    console.log('Disease detail page loaded')
    const id = options.id

    if (id) {
      this.setData({ diseaseId: id })
      this.loadDiseaseData(id)
    }
  },

  loadDiseaseData(diseaseId) {
    // 检查数据是否已加载
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadDiseaseData(diseaseId), 200)
      return
    }

    const disease = app.getDiseaseById(diseaseId)
    console.log('Disease:', disease ? disease.name : 'not found')

    if (disease) {
      this.setData({
        disease,
        loading: false
      })
    } else {
      this.setData({ loading: false })
    }
  },

  goToTreatment() {
    const { diseaseId } = this.data
    wx.navigateTo({
      url: `/pages/treatment/treatment?diseaseId=${diseaseId}`
    })
  },

  onShareAppMessage() {
    return {
      title: `猪病诊断助手 - ${this.data.disease.name}`,
      path: '/pages/index/index'
    }
  }
})

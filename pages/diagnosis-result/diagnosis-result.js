// pages/diagnosis-result/diagnosis-result.js
const app = getApp()

Page({
  data: {
    symptoms: [],
    symptomCount: 0,
    results: []
  },

  onLoad(options) {
    const { symptoms } = options
    
    if (symptoms) {
      const symptomIds = JSON.parse(symptoms)
      this.setData({ symptomCount: symptomIds.length })
      this.performDiagnosis(symptomIds)
    }
  },

  // 执行诊断
  performDiagnosis(symptomIds) {
    const results = app.diagnoseBySymptoms(symptomIds)
    
    // 获取疾病详情
    const detailedResults = results.map(result => {
      const disease = app.getDiseaseById(result.diseaseId)
      return {
        ...result,
        alias: disease ? disease.alias : '',
        severity: disease ? disease.severity : '',
        severityText: disease ? (disease.severity === 'high' ? '高危' : disease.severity === 'medium' ? '中危' : '低危') : '',
        isContagious: disease ? disease.is_contagious : false
      }
    })

    this.setData({ results: detailedResults })
  },

  // 跳转到治疗方案
  goToTreatment(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/treatment/treatment?diseaseId=${id}`
    })
  },

  // 重新诊断
  retryDiagnosis() {
    wx.navigateBack()
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 诊断结果',
      path: '/pages/index/index'
    }
  }
})

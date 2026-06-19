// pages/diagnosis-result/diagnosis-result.js
const app = getApp()

Page({
  data: {
    symptoms: [],
    symptomCount: 0,
    results: [],
    loading: true
  },

  onLoad(options) {
    console.log('Diagnosis result page loaded')
    const symptoms = options.symptoms

    if (symptoms) {
      const symptomIds = JSON.parse(symptoms)
      this.setData({ symptomCount: symptomIds.length })
      this.performDiagnosis(symptomIds)
    }
  },

  performDiagnosis(symptomIds) {
    // 检查数据是否已加载
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.performDiagnosis(symptomIds), 200)
      return
    }

    const results = app.diagnoseBySymptoms(symptomIds)
    console.log('Diagnosis results:', results.length)

    // 获取疾病详情
    const detailedResults = results.map(result => {
      const disease = app.getDiseaseById(result.diseaseId)
      return {
        ...result,
        alias: disease ? disease.alias : '',
        severity: disease ? disease.severity : '',
        severityText: disease ? (disease.severity === 'high' ? '高危' : disease.severity === 'medium' ? '中危' : '低危') : '',
        isContagious: disease ? disease.is_contagious : false,
        matchPercentage: Math.round(result.matchScore * 100) + '%'
      }
    })

    this.setData({
      results: detailedResults,
      loading: false
    })
  },

  goToTreatment(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/treatment/treatment?diseaseId=${id}`
    })
  },

  retryDiagnosis() {
    wx.navigateBack()
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 诊断结果',
      path: '/pages/index/index'
    }
  }
})

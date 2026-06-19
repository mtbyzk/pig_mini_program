// pages/treatment/treatment.js
const app = getApp()

Page({
  data: {
    diseaseId: '',
    disease: {},
    treatment: {},
    selectedPlanIndex: 0,
    currentPlan: {},
    loading: true
  },

  onLoad(options) {
    console.log('Treatment page loaded')
    const diseaseId = options.diseaseId

    if (diseaseId) {
      this.setData({ diseaseId })
      this.loadTreatmentData(diseaseId)
    }
  },

  loadTreatmentData(diseaseId) {
    // 检查数据是否已加载
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadTreatmentData(diseaseId), 200)
      return
    }

    const disease = app.getDiseaseById(diseaseId)
    const treatment = app.getTreatmentByDiseaseId(diseaseId)

    console.log('Disease:', disease ? disease.name : 'not found')
    console.log('Treatment:', treatment ? 'found' : 'not found')

    if (disease && treatment) {
      const currentPlan = treatment.treatment_plans && treatment.treatment_plans.length > 0
        ? treatment.treatment_plans[0]
        : {}

      this.setData({
        disease,
        treatment,
        currentPlan,
        loading: false
      })
    } else {
      this.setData({ loading: false })
    }
  },

  selectPlan(e) {
    const index = e.currentTarget.dataset.index
    const { treatment } = this.data

    this.setData({
      selectedPlanIndex: index,
      currentPlan: treatment.treatment_plans[index]
    })
  },

  onShareAppMessage() {
    return {
      title: `猪病诊断助手 - ${this.data.disease.name}治疗方案`,
      path: '/pages/index/index'
    }
  }
})

// pages/treatment/treatment.js
const app = getApp()

Page({
  data: {
    diseaseId: '',
    disease: {},
    treatment: {},
    selectedPlanIndex: 0,
    currentPlan: {}
  },

  onLoad(options) {
    const { diseaseId } = options
    
    if (diseaseId) {
      this.setData({ diseaseId })
      this.loadTreatmentData(diseaseId)
    }
  },

  // 加载治疗方案数据
  loadTreatmentData(diseaseId) {
    const disease = app.getDiseaseById(diseaseId)
    const treatment = app.getTreatmentByDiseaseId(diseaseId)

    if (disease && treatment) {
      const currentPlan = treatment.treatment_plans.length > 0 
        ? treatment.treatment_plans[0] 
        : {}

      this.setData({
        disease,
        treatment,
        currentPlan
      })
    }
  },

  // 选择治疗方案
  selectPlan(e) {
    const { index } = e.currentTarget.dataset
    const { treatment } = this.data
    
    this.setData({
      selectedPlanIndex: index,
      currentPlan: treatment.treatment_plans[index]
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: `猪病诊断助手 - ${this.data.disease.name}治疗方案`,
      path: '/pages/index/index'
    }
  }
})

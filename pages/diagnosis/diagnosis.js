// pages/diagnosis/diagnosis.js
const app = getApp()

Page({
  data: {
    symptoms: [],
    symptomCategories: [],
    selectedSymptoms: []
  },

  onLoad() {
    this.loadData()
  },

  onShow() {
    this.loadData()
  },

  // 加载数据
  loadData() {
    const { symptoms } = app.globalData
    
    // 等待数据加载完成
    if (symptoms.length === 0) {
      setTimeout(() => this.loadData(), 100)
      return
    }

    // 按类别分组症状
    const categories = this.groupSymptomsByCategory(symptoms)

    this.setData({
      symptoms,
      symptomCategories: categories
    })
  },

  // 按类别分组症状
  groupSymptomsByCategory(symptoms) {
    const categoryMap = {
      '体温类': { icon: '/images/thermometer.png', color: 'rgba(255, 71, 87, 0.1)', symptoms: [] },
      '呼吸类': { icon: '/images/air.png', color: 'rgba(112, 161, 255, 0.1)', symptoms: [] },
      '消化类': { icon: '/images/water.png', color: 'rgba(46, 213, 115, 0.1)', symptoms: [] },
      '皮肤类': { icon: '/images/healing.png', color: 'rgba(255, 165, 2, 0.1)', symptoms: [] },
      '神经类': { icon: '/images/brain.png', color: 'rgba(232, 70, 147, 0.1)', symptoms: [] },
      '生殖类': { icon: '/images/baby.png', color: 'rgba(162, 155, 254, 0.1)', symptoms: [] },
      '其他': { icon: '/images/other.png', color: 'rgba(149, 175, 192, 0.1)', symptoms: [] }
    }

    symptoms.forEach(symptom => {
      const category = symptom.category || '其他'
      if (categoryMap[category]) {
        categoryMap[category].symptoms.push(symptom)
      } else {
        categoryMap['其他'].symptoms.push(symptom)
      }
    })

    return Object.entries(categoryMap)
      .filter(([_, value]) => value.symptoms.length > 0)
      .map(([name, value]) => ({
        name,
        icon: value.icon,
        color: value.color,
        symptoms: value.symptoms
      }))
  },

  // 切换症状选择
  toggleSymptom(e) {
    const { id } = e.currentTarget.dataset
    let { selectedSymptoms } = this.data

    const index = selectedSymptoms.indexOf(id)
    if (index > -1) {
      selectedSymptoms.splice(index, 1)
    } else {
      selectedSymptoms.push(id)
    }

    this.setData({ selectedSymptoms })
  },

  // 开始诊断
  startDiagnosis() {
    const { selectedSymptoms } = this.data
    
    if (selectedSymptoms.length === 0) {
      wx.showToast({
        title: '请至少选择一个症状',
        icon: 'none'
      })
      return
    }

    // 执行诊断
    const results = app.diagnoseBySymptoms(selectedSymptoms)
    
    // 跳转到结果页面
    wx.navigateTo({
      url: `/pages/diagnosis-result/diagnosis-result?symptoms=${JSON.stringify(selectedSymptoms)}`
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 智能诊断',
      path: '/pages/diagnosis/diagnosis'
    }
  }
})

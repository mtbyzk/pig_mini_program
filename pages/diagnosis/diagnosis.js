// pages/diagnosis/diagnosis.js
const app = getApp()

Page({
  data: {
    symptoms: [],
    symptomCategories: [],
    selectedSymptoms: [],
    selectedSymptomIds: {},
    loading: true
  },

  onLoad() {
    console.log('Diagnosis page loaded')
    this.loadData()
  },

  onShow() {
    console.log('Diagnosis page shown')
    this.loadData()
  },

  loadData() {
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadData(), 200)
      return
    }

    const symptoms = app.getSymptoms()
    console.log('Diagnosis - Symptoms:', symptoms.length)

    const categories = this.groupSymptomsByCategory(symptoms)

    this.setData({
      symptoms,
      symptomCategories: categories,
      loading: false
    })
  },

  groupSymptomsByCategory(symptoms) {
    const categoryMap = {
      'temperature': { name: '体温类', icon: '/images/thermometer.png', color: 'rgba(255, 71, 87, 0.1)', symptoms: [] },
      'respiratory': { name: '呼吸类', icon: '/images/air.png', color: 'rgba(112, 161, 255, 0.1)', symptoms: [] },
      'digestive': { name: '消化类', icon: '/images/water.png', color: 'rgba(46, 213, 115, 0.1)', symptoms: [] },
      'skin': { name: '皮肤类', icon: '/images/healing.png', color: 'rgba(255, 165, 2, 0.1)', symptoms: [] },
      'neurological': { name: '神经类', icon: '/images/brain.png', color: 'rgba(232, 70, 147, 0.1)', symptoms: [] },
      'reproductive': { name: '生殖类', icon: '/images/baby.png', color: 'rgba(162, 155, 254, 0.1)', symptoms: [] },
      'locomotor': { name: '运动类', icon: '/images/other.png', color: 'rgba(255, 165, 2, 0.1)', symptoms: [] },
      'eye': { name: '眼部类', icon: '/images/other.png', color: 'rgba(112, 161, 255, 0.1)', symptoms: [] },
      'general': { name: '全身症状', icon: '/images/other.png', color: 'rgba(149, 175, 192, 0.1)', symptoms: [] },
      '其他': { name: '其他', icon: '/images/other.png', color: 'rgba(149, 175, 192, 0.1)', symptoms: [] }
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
      .map(([key, value]) => ({
        key,
        name: value.name,
        icon: value.icon,
        color: value.color,
        symptoms: value.symptoms
      }))
  },

  toggleSymptom(e) {
    const id = e.currentTarget.dataset.id
    let selectedSymptoms = [...this.data.selectedSymptoms]
    let selectedSymptomIds = {...this.data.selectedSymptomIds}

    const index = selectedSymptoms.indexOf(id)
    if (index > -1) {
      selectedSymptoms.splice(index, 1)
      delete selectedSymptomIds[id]
    } else {
      selectedSymptoms.push(id)
      selectedSymptomIds[id] = true
    }

    this.setData({ 
      selectedSymptoms,
      selectedSymptomIds
    })
  },

  isSymptomSelected(symptomId) {
    return this.data.selectedSymptomIds[symptomId] || false
  },

  startDiagnosis() {
    const { selectedSymptoms } = this.data

    if (selectedSymptoms.length === 0) {
      wx.showToast({
        title: '请至少选择一个症状',
        icon: 'none'
      })
      return
    }

    wx.navigateTo({
      url: `/pages/diagnosis-result/diagnosis-result?symptoms=${JSON.stringify(selectedSymptoms)}`
    })
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 智能诊断',
      path: '/pages/diagnosis/diagnosis'
    }
  }
})

// app.js
App({
  onLaunch() {
    console.log('=== App Launch ===')
    
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'your-env-id', // 替换为你的云开发环境ID
        traceUser: true,
      })
      console.log('云开发初始化成功')
    }
    
    this.initData()
    this.loadThemeMode()
  },

  globalData: {
    diseases: [],
    symptoms: [],
    medications: [],
    compatibilities: [],
    treatments: [],
    diseaseSymptoms: [],
    isDarkMode: false,
    language: 'zh',
    dataLoaded: false
  },

  // 加载主题模式
  loadThemeMode() {
    try {
      const isDarkMode = wx.getStorageSync('isDarkMode')
      if (isDarkMode !== '') {
        this.globalData.isDarkMode = isDarkMode
      }
    } catch (e) {
      console.error('加载主题模式失败:', e)
    }
  },

  // 保存主题模式
  saveThemeMode(isDarkMode) {
    try {
      wx.setStorageSync('isDarkMode', isDarkMode)
      this.globalData.isDarkMode = isDarkMode
    } catch (e) {
      console.error('保存主题模式失败:', e)
    }
  },

  // 切换主题模式
  toggleThemeMode() {
    const isDarkMode = !this.globalData.isDarkMode
    this.saveThemeMode(isDarkMode)
    return isDarkMode
  },

  // 加载语言设置
  loadLanguage() {
    try {
      const language = wx.getStorageSync('language')
      if (language !== '') {
        this.globalData.language = language
      }
    } catch (e) {
      console.error('加载语言设置失败:', e)
    }
  },

  // 保存语言设置
  saveLanguage(language) {
    try {
      wx.setStorageSync('language', language)
      this.globalData.language = language
    } catch (e) {
      console.error('保存语言设置失败:', e)
    }
  },

  // 切换语言
  toggleLanguage() {
    const language = this.globalData.language === 'zh' ? 'en' : 'zh'
    this.saveLanguage(language)
    return language
  },

  // 获取本地化文本
  getLocalText(key) {
    const language = this.globalData.language
    const texts = {
      zh: {
        appName: '猪病诊断助手',
        home: '首页',
        encyclopedia: '疾病百科',
        settings: '设置',
        diagnosis: '疾病分析',
        medication: '用药方案',
        compatibility: '药物配伍',
        record: '分析记录',
        startDiagnosis: '开始分析',
        selectSymptoms: '选择症状，快速判断疾病',
        quickEntry: '快速入口',
        commonDiseases: '常见高危疾病',
        viewAll: '查看全部',
        darkMode: '深色模式',
        language: '语言',
        notification: '通知提醒',
        dataSync: '数据同步',
        offlineData: '离线数据',
        clearCache: '清除缓存',
        diseaseCount: '疾病数量',
        symptomCount: '症状数量',
        medicationCount: '药品数量',
        version: '版本',
        agreement: '使用协议',
        privacy: '隐私政策',
        feedback: '意见反馈',
        rateUs: '给我们评分',
        developer: '开发者：WangXin',
        pro: 'PRO',
        professional: '专业 · 快速 · 准确',
        disclaimer: '数据仅供参考，具体用药请咨询兽医'
      },
      en: {
        appName: 'Pig Disease Assistant',
        home: 'Home',
        encyclopedia: 'Encyclopedia',
        settings: 'Settings',
        diagnosis: 'Disease Analysis',
        medication: 'Medication',
        compatibility: 'Compatibility',
        record: 'Analysis Record',
        startDiagnosis: 'Start Analysis',
        selectSymptoms: 'Select symptoms to analyze disease',
        quickEntry: 'Quick Entry',
        commonDiseases: 'Common High-risk Diseases',
        viewAll: 'View All',
        darkMode: 'Dark Mode',
        language: 'Language',
        notification: 'Notification',
        dataSync: 'Data Sync',
        offlineData: 'Offline Data',
        clearCache: 'Clear Cache',
        diseaseCount: 'Disease Count',
        symptomCount: 'Symptom Count',
        medicationCount: 'Medication Count',
        version: 'Version',
        agreement: 'Agreement',
        privacy: 'Privacy Policy',
        feedback: 'Feedback',
        rateUs: 'Rate Us',
        developer: 'Developer: WangXin',
        pro: 'PRO',
        professional: 'Professional · Fast · Accurate',
        disclaimer: 'For reference only, consult veterinarian for medication'
      }
    }
    return texts[language][key] || key
  },

  // 初始化数据
  initData() {
    try {
      // 使用require加载JS模块
      const diseases = require('./data/diseases.js')
      const symptoms = require('./data/symptoms.js')
      const medications = require('./data/medications.js')
      const treatments = require('./data/treatments.js')
      const diseaseSymptoms = require('./data/disease_symptoms.js')
      const compatibilities = require('./data/compatibilities.js')

      this.globalData.diseases = diseases
      console.log('疾病数量:', diseases.length)

      this.globalData.symptoms = symptoms
      console.log('症状数量:', symptoms.length)

      this.globalData.medications = medications
      console.log('药品数量:', medications.length)

      this.globalData.treatments = treatments
      console.log('治疗方案数量:', treatments.length)

      this.globalData.diseaseSymptoms = diseaseSymptoms
      console.log('疾病症状关联数量:', diseaseSymptoms.length)

      this.globalData.compatibilities = compatibilities
      console.log('药物配伍数量:', compatibilities.length)

      this.globalData.dataLoaded = true
      console.log('=== 数据加载完成 ===')
    } catch (error) {
      console.error('数据加载错误:', error)
    }
  },

  // 获取疾病列表
  getDiseases() {
    return this.globalData.diseases
  },

  // 获取症状列表
  getSymptoms() {
    return this.globalData.symptoms
  },

  // 获取药品列表
  getMedications() {
    return this.globalData.medications
  },

  // 根据ID获取疾病
  getDiseaseById(id) {
    return this.globalData.diseases.find(d => d.id === id)
  },

  // 根据ID获取治疗方案
  getTreatmentByDiseaseId(diseaseId) {
    return this.globalData.treatments.find(t => t.disease_id === diseaseId)
  },

  // 搜索疾病
  searchDiseases(query) {
    if (!query) return this.globalData.diseases
    const q = query.toLowerCase()
    return this.globalData.diseases.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.alias.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    )
  },

  // 根据分类筛选疾病
  filterDiseasesByCategory(category) {
    if (category === 'all') return this.globalData.diseases
    
    return this.globalData.diseases.filter(d => {
      switch (category) {
        case 'high': return d.severity === 'high'
        case 'contagious': return d.is_contagious
        case 'digestive': return d.description.includes('消化') || d.description.includes('腹泻')
        case 'respiratory': return d.description.includes('呼吸') || d.description.includes('咳嗽')
        case 'skin': return d.description.includes('皮肤') || d.description.includes('皮疹')
        default: return true
      }
    })
  },

  // 根据症状诊断疾病
  diagnoseBySymptoms(symptomIds) {
    const diseaseSymptoms = this.globalData.diseaseSymptoms
    const diseases = this.globalData.diseases
    const symptoms = this.globalData.symptoms

    if (!diseaseSymptoms || diseaseSymptoms.length === 0) {
      console.log('疾病症状关联数据为空')
      return []
    }

    const results = diseases.map(disease => {
      const diseaseSymptomIds = diseaseSymptoms
        .filter(ds => ds.disease_id === disease.id)
        .map(ds => ds.symptom_id)

      if (diseaseSymptomIds.length === 0) return null

      const matched = symptomIds.filter(id => diseaseSymptomIds.includes(id))
      const score = matched.length / diseaseSymptomIds.length

      if (score === 0) return null

      const matchedNames = matched.map(id => {
        const s = symptoms.find(s => s.id === id)
        return s ? s.name : ''
      }).filter(n => n)

      return {
        diseaseId: disease.id,
        diseaseName: disease.name,
        matchScore: score,
        matchedSymptoms: matched.length,
        totalSymptoms: diseaseSymptomIds.length,
        matchedSymptomNames: matchedNames
      }
    }).filter(r => r !== null)

    results.sort((a, b) => b.matchScore - a.matchScore)
    return results.slice(0, 5)
  }
})

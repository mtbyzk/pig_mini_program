// app.js
App({
  onLaunch() {
    console.log('App Launch')
    this.loadAllData()
  },

  globalData: {
    diseases: [],
    symptoms: [],
    medications: [],
    compatibilities: [],
    treatments: [],
    diseaseSymptoms: [],
    isDarkMode: false,
    language: 'zh'
  },

  // 加载所有数据
  async loadAllData() {
    try {
      await Promise.all([
        this.loadDiseases(),
        this.loadSymptoms(),
        this.loadMedications(),
        this.loadCompatibilities(),
        this.loadTreatments(),
        this.loadDiseaseSymptoms()
      ])
      console.log('All data loaded successfully')
    } catch (error) {
      console.error('Error loading data:', error)
    }
  },

  // 加载疾病数据
  async loadDiseases() {
    try {
      const res = await this.readJsonFile('data/diseases.json')
      this.globalData.diseases = res
    } catch (error) {
      console.error('Error loading diseases:', error)
      this.globalData.diseases = []
    }
  },

  // 加载症状数据
  async loadSymptoms() {
    try {
      const res = await this.readJsonFile('data/symptoms.json')
      this.globalData.symptoms = res
    } catch (error) {
      console.error('Error loading symptoms:', error)
      this.globalData.symptoms = []
    }
  },

  // 加载药品数据
  async loadMedications() {
    try {
      const res = await this.readJsonFile('data/medications.json')
      this.globalData.medications = res
    } catch (error) {
      console.error('Error loading medications:', error)
      this.globalData.medications = []
    }
  },

  // 加载药物配伍数据
  async loadCompatibilities() {
    try {
      const res = await this.readJsonFile('data/compatibilities.json')
      this.globalData.compatibilities = res
    } catch (error) {
      console.error('Error loading compatibilities:', error)
      this.globalData.compatibilities = []
    }
  },

  // 加载治疗方案数据
  async loadTreatments() {
    try {
      const res = await this.readJsonFile('data/treatments.json')
      this.globalData.treatments = res
    } catch (error) {
      console.error('Error loading treatments:', error)
      this.globalData.treatments = []
    }
  },

  // 加载疾病-症状关联数据
  async loadDiseaseSymptoms() {
    try {
      const res = await this.readJsonFile('data/disease_symptoms.json')
      this.globalData.diseaseSymptoms = res
    } catch (error) {
      console.error('Error loading disease symptoms:', error)
      this.globalData.diseaseSymptoms = []
    }
  },

  // 读取JSON文件
  readJsonFile(filePath) {
    return new Promise((resolve, reject) => {
      const fs = wx.getFileSystemManager()
      const fullPath = `${wx.env.USER_DATA_PATH}/${filePath}`
      
      // 先尝试从本地缓存读取
      try {
        const content = fs.readFileSync(fullPath, 'utf8')
        resolve(JSON.parse(content))
      } catch (e) {
        // 本地没有，从包内读取
        try {
          const res = wx.getFileSystemManager().readFileSync(
            `${wx.env.USER_DATA_PATH}/${filePath}`,
            'utf8'
          )
          resolve(JSON.parse(res))
        } catch (e2) {
          // 使用require加载
          try {
            const data = require(`./${filePath}`)
            resolve(data)
          } catch (e3) {
            reject(e3)
          }
        }
      }
    })
  },

  // 搜索疾病
  searchDiseases(query) {
    if (!query) return this.globalData.diseases
    const lowerQuery = query.toLowerCase()
    return this.globalData.diseases.filter(d => 
      d.name.toLowerCase().includes(lowerQuery) ||
      d.alias.toLowerCase().includes(lowerQuery) ||
      d.description.toLowerCase().includes(lowerQuery)
    )
  },

  // 获取疾病的治疗方案
  getTreatmentByDiseaseId(diseaseId) {
    return this.globalData.treatments.find(t => t.disease_id === diseaseId)
  },

  // 获取疾病详情
  getDiseaseById(diseaseId) {
    return this.globalData.diseases.find(d => d.id === diseaseId)
  },

  // 获取药品详情
  getMedicationById(medId) {
    return this.globalData.medications.find(m => m.id === medId)
  },

  // 获取药物配伍信息
  getCompatibility(drugAId, drugBId) {
    return this.globalData.compatibilities.find(c => 
      (c.drug_a_id === drugAId && c.drug_b_id === drugBId) ||
      (c.drug_a_id === drugBId && c.drug_b_id === drugAId)
    )
  },

  // 根据症状诊断疾病
  diagnoseBySymptoms(symptomIds) {
    const diseaseSymptoms = this.globalData.diseaseSymptoms
    const diseases = this.globalData.diseases
    
    // 计算每个疾病的匹配度
    const results = diseases.map(disease => {
      // 获取该疾病的所有症状ID
      const diseaseSymptomIds = diseaseSymptoms
        .filter(ds => ds.disease_id === disease.id)
        .map(ds => ds.symptom_id)
      
      if (diseaseSymptomIds.length === 0) return null
      
      // 计算匹配的症状数
      const matchedSymptoms = symptomIds.filter(id => diseaseSymptomIds.includes(id))
      const matchScore = matchedSymptoms.length / diseaseSymptomIds.length
      
      if (matchScore === 0) return null
      
      // 获取匹配的症状名称
      const matchedSymptomNames = matchedSymptoms.map(id => {
        const symptom = this.globalData.symptoms.find(s => s.id === id)
        return symptom ? symptom.name : ''
      }).filter(name => name)
      
      return {
        diseaseId: disease.id,
        diseaseName: disease.name,
        matchScore: matchScore,
        matchedSymptoms: matchedSymptoms.length,
        totalSymptoms: diseaseSymptomIds.length,
        matchedSymptomNames: matchedSymptomNames
      }
    }).filter(r => r !== null)
    
    // 按匹配度排序
    results.sort((a, b) => b.matchScore - a.matchScore)
    
    return results.slice(0, 5) // 返回前5个最匹配的
  }
})

// pages/settings/settings.js
const app = getApp()

Page({
  data: {
    diseases: [],
    symptoms: [],
    medications: [],
    isDarkMode: false,
    language: 'zh',
    cacheSize: '8.5 MB',
    loading: true,
    // 本地化文本
    texts: {
      settings: '设置',
      userCard: '兽医用户',
      proVersion: '专业版 · 无限制使用',
      generalSettings: '通用设置',
      darkMode: '深色模式',
      language: '语言',
      notification: '通知提醒',
      on: '开启',
      dataManagement: '数据管理',
      dataSync: '数据同步',
      lastSync: '上次同步: 今天',
      offlineData: '离线数据',
      downloaded: '已下载',
      clearCache: '清除缓存',
      currentCache: '当前缓存: 8.5 MB',
      diseaseData: '疾病数据',
      diseaseCount: '疾病数量',
      symptomCount: '症状数量',
      medicationCount: '药品数量',
      about: '关于',
      version: '版本',
      agreement: '使用协议',
      privacyPolicy: '隐私政策',
      feedback: '意见反馈',
      rateUs: '给我们评分',
      appName: '猪病诊断助手',
      developer: '开发者：WangXin',
      slogan: '专业 · 快速 · 准确',
      disclaimer: '数据仅供参考，具体用药请咨询兽医'
    }
  },

  onLoad() {
    console.log('Settings page loaded')
    this.loadData()
  },

  onShow() {
    console.log('Settings page shown')
    this.loadData()
  },

  loadData() {
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadData(), 200)
      return
    }

    const diseases = app.getDiseases()
    const symptoms = app.getSymptoms()
    const medications = app.getMedications()
    const isDarkMode = app.globalData.isDarkMode
    const language = app.globalData.language

    console.log('Settings - Diseases:', diseases.length)
    console.log('Settings - Language:', language)

    this.setData({
      diseases,
      symptoms,
      medications,
      isDarkMode,
      language,
      loading: false
    })

    this.updateTexts(language)
  },

  updateTexts(language) {
    const texts = language === 'en' ? {
      settings: 'Settings',
      userCard: 'Veterinarian',
      proVersion: 'Pro Version · Unlimited',
      generalSettings: 'General Settings',
      darkMode: 'Dark Mode',
      language: 'Language',
      notification: 'Notification',
      on: 'On',
      dataManagement: 'Data Management',
      dataSync: 'Data Sync',
      lastSync: 'Last sync: Today',
      offlineData: 'Offline Data',
      downloaded: 'Downloaded',
      clearCache: 'Clear Cache',
      currentCache: 'Current cache: 8.5 MB',
      diseaseData: 'Disease Data',
      diseaseCount: 'Disease Count',
      symptomCount: 'Symptom Count',
      medicationCount: 'Medication Count',
      about: 'About',
      version: 'Version',
      agreement: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
      feedback: 'Feedback',
      rateUs: 'Rate Us',
      appName: 'Pig Disease Assistant',
      developer: 'Developer: WangXin',
      slogan: 'Professional · Fast · Accurate',
      disclaimer: 'For reference only, consult veterinarian for medication'
    } : {
      settings: '设置',
      userCard: '兽医用户',
      proVersion: '专业版 · 无限制使用',
      generalSettings: '通用设置',
      darkMode: '深色模式',
      language: '语言',
      notification: '通知提醒',
      on: '开启',
      dataManagement: '数据管理',
      dataSync: '数据同步',
      lastSync: '上次同步: 今天',
      offlineData: '离线数据',
      downloaded: '已下载',
      clearCache: '清除缓存',
      currentCache: '当前缓存: 8.5 MB',
      diseaseData: '疾病数据',
      diseaseCount: '疾病数量',
      symptomCount: '症状数量',
      medicationCount: '药品数量',
      about: '关于',
      version: '版本',
      agreement: '使用协议',
      privacyPolicy: '隐私政策',
      feedback: '意见反馈',
      rateUs: '给我们评分',
      appName: '猪病诊断助手',
      developer: '开发者：WangXin',
      slogan: '专业 · 快速 · 准确',
      disclaimer: '数据仅供参考，具体用药请咨询兽医'
    }

    this.setData({ texts })
  },

  toggleDarkMode(e) {
    const value = e.detail.value
    this.setData({ isDarkMode: value })
    app.saveThemeMode(value)
    
    wx.setNavigationBarColor({
      frontColor: value ? '#ffffff' : '#000000',
      backgroundColor: value ? '#1A1A1A' : '#FF2442'
    })
    
    wx.showToast({
      title: value ? '已开启深色模式' : '已关闭深色模式',
      icon: 'none'
    })
  },

  toggleLanguage(e) {
    const value = e.detail.value
    const language = value ? 'en' : 'zh'
    this.setData({ language })
    app.saveLanguage(language)
    
    // 更新文本
    this.updateTexts(language)
    
    // 更新导航栏标题
    wx.setNavigationBarTitle({
      title: language === 'en' ? 'Settings' : '设置'
    })
    
    wx.showToast({
      title: value ? '已切换为英文' : '已切换为中文',
      icon: 'none'
    })
  },

  showNotification() {
    wx.showToast({
      title: this.data.texts.notification + ' ' + this.data.texts.on,
      icon: 'none'
    })
  },

  syncData() {
    wx.showLoading({ title: '...' })
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({ title: this.data.texts.dataSync, icon: 'success' })
    }, 1500)
  },

  showOfflineData() {
    wx.showToast({ title: this.data.texts.offlineData, icon: 'none' })
  },

  clearCache() {
    wx.showModal({
      title: this.data.texts.clearCache,
      content: this.data.texts.clearCache,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: this.data.texts.clearCache, icon: 'success' })
        }
      }
    })
  },

  showDiseaseInfo() {
    wx.showModal({
      title: this.data.texts.diseaseData,
      content: `${this.data.diseases.length}`,
      showCancel: false
    })
  },

  showSymptomInfo() {
    wx.showModal({
      title: this.data.texts.diseaseData,
      content: `${this.data.symptoms.length}`,
      showCancel: false
    })
  },

  showMedicationInfo() {
    wx.showModal({
      title: this.data.texts.diseaseData,
      content: `${this.data.medications.length}`,
      showCancel: false
    })
  },

  showVersion() {
    wx.showModal({
      title: this.data.texts.about + ' ' + this.data.texts.appName,
      content: `${this.data.texts.version}: v1.0.0\n${this.data.texts.developer}\n\n${this.data.texts.appName}`,
      showCancel: false
    })
  },

  showAgreement() {
    wx.navigateTo({
      url: '/pages/agreement/agreement'
    })
  },

  showPrivacy() {
    wx.navigateTo({
      url: '/pages/privacy/privacy'
    })
  },

  showFeedback() {
    wx.showModal({
      title: this.data.texts.feedback,
      content: '5015684@qq.com',
      showCancel: false
    })
  },

  rateApp() {
    wx.showToast({ title: this.data.texts.rateUs, icon: 'none' })
  },

  onShareAppMessage() {
    return {
      title: this.data.texts.appName,
      path: '/pages/index/index'
    }
  }
})

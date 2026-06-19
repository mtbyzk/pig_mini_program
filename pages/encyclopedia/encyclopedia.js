// pages/encyclopedia/encyclopedia.js
const app = getApp()

Page({
  data: {
    diseases: [],
    filteredDiseases: [],
    searchQuery: '',
    selectedCategory: 'all',
    loading: true,
    language: 'zh',
    texts: {
      encyclopedia: '疾病百科',
      searchHint: '搜索疾病名称或症状...',
      all: '全部',
      highRisk: '高危',
      contagious: '传染性',
      digestive: '消化道',
      respiratory: '呼吸道',
      skin: '皮肤',
      noResults: '未找到相关疾病',
      tryOther: '请尝试其他搜索词或分类'
    }
  },

  onLoad() {
    console.log('Encyclopedia page loaded')
    this.loadData()
  },

  onShow() {
    console.log('Encyclopedia page shown')
    this.loadData()
  },

  loadData() {
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadData(), 200)
      return
    }

    const diseases = app.getDiseases()
    const language = app.globalData.language

    console.log('Encyclopedia - Diseases:', diseases.length)
    console.log('Encyclopedia - Language:', language)

    this.setData({
      diseases,
      filteredDiseases: diseases,
      language,
      loading: false
    })

    this.updateTexts(language)
  },

  updateTexts(language) {
    const texts = language === 'en' ? {
      encyclopedia: 'Encyclopedia',
      searchHint: 'Search disease or symptom...',
      all: 'All',
      highRisk: 'High Risk',
      contagious: 'Contagious',
      digestive: 'Digestive',
      respiratory: 'Respiratory',
      skin: 'Skin',
      noResults: 'No results found',
      tryOther: 'Try other search terms or categories'
    } : {
      encyclopedia: '疾病百科',
      searchHint: '搜索疾病名称或症状...',
      all: '全部',
      highRisk: '高危',
      contagious: '传染性',
      digestive: '消化道',
      respiratory: '呼吸道',
      skin: '皮肤',
      noResults: '未找到相关疾病',
      tryOther: '请尝试其他搜索词或分类'
    }

    this.setData({ texts })
  },

  onSearchInput(e) {
    const query = e.detail.value
    this.setData({ searchQuery: query })
    this.filterDiseases()
  },

  onSearch() {
    this.filterDiseases()
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ selectedCategory: category })
    this.filterDiseases()
  },

  filterDiseases() {
    const { diseases, searchQuery, selectedCategory } = this.data
    let filtered = [...diseases]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.alias.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => {
        switch (selectedCategory) {
          case 'high': return d.severity === 'high'
          case 'contagious': return d.is_contagious
          case 'digestive': return d.description.includes('消化') || d.description.includes('腹泻')
          case 'respiratory': return d.description.includes('呼吸') || d.description.includes('咳嗽')
          case 'skin': return d.description.includes('皮肤') || d.description.includes('皮疹')
          default: return true
        }
      })
    }

    this.setData({ filteredDiseases: filtered })
  },

  goToDiseaseDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${id}`
    })
  },

  onShareAppMessage() {
    return {
      title: this.data.texts.encyclopedia,
      path: '/pages/encyclopedia/encyclopedia'
    }
  }
})

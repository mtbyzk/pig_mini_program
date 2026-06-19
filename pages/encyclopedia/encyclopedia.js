// pages/encyclopedia/encyclopedia.js
const app = getApp()

Page({
  data: {
    diseases: [],
    filteredDiseases: [],
    searchQuery: '',
    selectedCategory: 'all'
  },

  onLoad() {
    this.loadData()
  },

  onShow() {
    this.loadData()
  },

  // 加载数据
  loadData() {
    const { diseases } = app.globalData
    
    // 等待数据加载完成
    if (diseases.length === 0) {
      setTimeout(() => this.loadData(), 100)
      return
    }

    this.setData({
      diseases,
      filteredDiseases: diseases
    })
  },

  // 搜索输入
  onSearchInput(e) {
    const { value } = e.detail
    this.setData({ searchQuery: value })
    this.filterDiseases()
  },

  // 搜索
  onSearch() {
    this.filterDiseases()
  },

  // 选择分类
  selectCategory(e) {
    const { category } = e.currentTarget.dataset
    this.setData({ selectedCategory: category })
    this.filterDiseases()
  },

  // 过滤疾病
  filterDiseases() {
    const { diseases, searchQuery, selectedCategory } = this.data
    
    let filtered = [...diseases]

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.alias.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
      )
    }

    // 分类过滤
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => {
        switch (selectedCategory) {
          case 'high':
            return d.severity === 'high'
          case 'contagious':
            return d.is_contagious
          case 'digestive':
            return d.description.includes('消化') || d.description.includes('腹泻')
          case 'respiratory':
            return d.description.includes('呼吸') || d.description.includes('咳嗽')
          case 'skin':
            return d.description.includes('皮肤') || d.description.includes('皮疹')
          default:
            return true
        }
      })
    }

    this.setData({ filteredDiseases: filtered })
  },

  // 跳转到疾病详情
  goToDiseaseDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${id}`
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 疾病百科',
      path: '/pages/encyclopedia/encyclopedia'
    }
  }
})

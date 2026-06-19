// pages/pig-price/pig-price.js
const app = getApp()

Page({
  data: {
    currentDate: '',
    updateTime: '',
    selectedType: 'outer3',
    pigTypes: [
      { key: 'outer3', name: '外三元', price: '--', kgPrice: '--', change: '--', trend: 'stable' },
      { key: 'inner3', name: '内三元', price: '--', kgPrice: '--', change: '--', trend: 'stable' },
      { key: 'local', name: '土杂猪', price: '--', kgPrice: '--', change: '--', trend: 'stable' }
    ],
    provinces: [],
    sortBy: 'price',
    sortOrder: 'desc',
    avgPrice: '--',
    maxPrice: '--',
    minPrice: '--',
    avgKgPrice: '--',
    maxKgPrice: '--',
    minKgPrice: '--',
    grainData: {
      corn: '--',
      cornChange: '--',
      soybean: '--',
      soybeanChange: '--',
      pigGrainRatio: '--'
    },
    loading: true,
    error: null,
    lastUpdate: null
  },

  onLoad() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    
    this.setData({
      currentDate: `${year}-${month}-${day}`
    })
    
    this.loadPigPriceData()
  },

  onShow() {
    // 每次显示页面时检查是否需要刷新数据
    const lastUpdate = this.data.lastUpdate
    const now = new Date()
    
    // 如果超过30分钟没有更新，重新加载数据
    if (!lastUpdate || (now - lastUpdate) > 30 * 60 * 1000) {
      this.loadPigPriceData()
    }
  },

  // 加载猪价数据
  async loadPigPriceData() {
    this.setData({ loading: true, error: null })
    
    try {
      console.log('开始加载猪价数据...')
      
      // 调用云函数获取实时数据
      const result = await wx.cloud.callFunction({
        name: 'getPigPrice',
        data: {}
      })
      
      console.log('云函数返回结果:', result)
      
      if (result.result && result.result.success) {
        this.processPriceData(result.result)
      } else {
        console.error('云函数返回失败:', result.result)
        this.setData({ 
          error: '数据获取失败，使用缓存数据',
          loading: false 
        })
        // 使用缓存数据或默认数据
        this.loadDefaultData()
      }
      
    } catch (error) {
      console.error('调用云函数失败:', error)
      this.setData({ 
        error: '网络错误，使用缓存数据',
        loading: false 
      })
      // 使用缓存数据或默认数据
      this.loadDefaultData()
    }
  },

  // 处理价格数据
  processPriceData(data) {
    const { national, provinces, feed } = data
    
    // 更新全国均价
    if (national) {
      const outer3Price = national.outer3 ? (parseFloat(national.outer3) / 2).toFixed(2) : '--'
      const inner3Price = national.inner3 ? (parseFloat(national.inner3) / 2).toFixed(2) : '--'
      const localPrice = national.local ? (parseFloat(national.local) / 2).toFixed(2) : '--'
      
      this.setData({
        pigTypes: [
          { key: 'outer3', name: '外三元', price: outer3Price, kgPrice: national.outer3 || '--', change: '--', trend: 'stable' },
          { key: 'inner3', name: '内三元', price: inner3Price, kgPrice: national.inner3 || '--', change: '--', trend: 'stable' },
          { key: 'local', name: '土杂猪', price: localPrice, kgPrice: national.local || '--', change: '--', trend: 'stable' }
        ]
      })
    }
    
    // 更新各省价格
    if (provinces && provinces.length > 0) {
      this.setData({ provinces: provinces })
      this.calculateStats()
    }
    
    // 更新饲料数据
    if (feed) {
      this.setData({
        grainData: {
          corn: feed.corn || '--',
          cornChange: '--',
          soybean: feed.soybean || '--',
          soybeanChange: '--',
          pigGrainRatio: feed.pigGrainRatio || '--'
        }
      })
    }
    
    // 更新时间
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    
    this.setData({
      updateTime: `${this.data.currentDate} ${hour}:${minute}`,
      loading: false,
      lastUpdate: now
    })
    
    wx.showToast({
      title: '数据已更新',
      icon: 'success'
    })
  },

  // 加载默认数据（缓存或离线）
  loadDefaultData() {
    // 这里可以加载本地缓存的数据
    // 暂时使用默认数据
    console.log('使用默认数据')
  },

  selectType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ selectedType: type })
  },

  calculateStats() {
    const { provinces } = this.data
    if (!provinces || provinces.length === 0) return
    
    const prices = provinces.map(p => parseFloat(p.jinPrice)).filter(p => !isNaN(p))
    const kgPrices = provinces.map(p => parseFloat(p.kgPrice)).filter(p => !isNaN(p))
    
    if (prices.length > 0) {
      this.setData({
        avgPrice: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
        maxPrice: Math.max(...prices).toFixed(2),
        minPrice: Math.min(...prices).toFixed(2)
      })
    }
    
    if (kgPrices.length > 0) {
      this.setData({
        avgKgPrice: (kgPrices.reduce((a, b) => a + b, 0) / kgPrices.length).toFixed(2),
        maxKgPrice: Math.max(...kgPrices).toFixed(2),
        minKgPrice: Math.min(...kgPrices).toFixed(2)
      })
    }
  },

  sortByPrice() {
    const { provinces, sortBy, sortOrder } = this.data
    const newOrder = sortBy === 'price' && sortOrder === 'desc' ? 'asc' : 'desc'
    const sorted = [...provinces].sort((a, b) => {
      const priceA = parseFloat(a.jinPrice) || 0
      const priceB = parseFloat(b.jinPrice) || 0
      return newOrder === 'desc' ? priceB - priceA : priceA - priceB
    })
    this.setData({
      provinces: sorted,
      sortBy: 'price',
      sortOrder: newOrder
    })
  },

  sortByName() {
    const { provinces, sortBy, sortOrder } = this.data
    const newOrder = sortBy === 'name' && sortOrder === 'asc' ? 'desc' : 'asc'
    const sorted = [...provinces].sort((a, b) => {
      return newOrder === 'asc' 
        ? a.name.localeCompare(b.name, 'zh')
        : b.name.localeCompare(a.name, 'zh')
    })
    this.setData({
      provinces: sorted,
      sortBy: 'name',
      sortOrder: newOrder
    })
  },

  // 刷新数据
  refreshData() {
    this.loadPigPriceData()
  },

  goToCityPrice() {
    wx.navigateTo({
      url: '/pages/city-price/city-price'
    })
  },

  onShareAppMessage() {
    return {
      title: `今日猪价 ${this.data.currentDate}`,
      path: '/pages/index/index'
    }
  }
})

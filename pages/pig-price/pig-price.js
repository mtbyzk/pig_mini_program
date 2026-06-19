// pages/pig-price/pig-price.js
Page({
  data: {
    currentDate: '2026-06-19',
    updateTime: '2026-06-19 10:00',
    selectedType: 'outer3',
    pigTypes: [
      { key: 'outer3', name: '外三元', price: '4.81', kgPrice: '9.61', change: '-0.01', trend: 'down' },
      { key: 'inner3', name: '内三元', price: '4.95', kgPrice: '9.90', change: '-0.04', trend: 'down' },
      { key: 'local', name: '土杂猪', price: '4.72', kgPrice: '9.44', change: '-0.02', trend: 'down' }
    ],
    provinces: [
      { name: '北京', price: '4.91', kgPrice: '9.81', trend: 'up', change: '+0.05' },
      { name: '天津', price: '4.88', kgPrice: '9.75', trend: 'up', change: '+0.04' },
      { name: '河北', price: '4.81', kgPrice: '9.61', trend: 'stable', change: '0' },
      { name: '山西', price: '4.78', kgPrice: '9.55', trend: 'down', change: '-0.03' },
      { name: '内蒙古', price: '4.71', kgPrice: '9.41', trend: 'stable', change: '0' },
      { name: '辽宁', price: '4.75', kgPrice: '9.49', trend: 'up', change: '+0.02' },
      { name: '吉林', price: '4.72', kgPrice: '9.44', trend: 'stable', change: '0' },
      { name: '黑龙江', price: '4.68', kgPrice: '9.35', trend: 'down', change: '-0.03' },
      { name: '上海', price: '4.98', kgPrice: '9.95', trend: 'up', change: '+0.08' },
      { name: '江苏', price: '4.91', kgPrice: '9.81', trend: 'up', change: '+0.06' },
      { name: '浙江', price: '4.95', kgPrice: '9.89', trend: 'up', change: '+0.04' },
      { name: '安徽', price: '4.85', kgPrice: '9.69', trend: 'up', change: '+0.03' },
      { name: '福建', price: '4.88', kgPrice: '9.75', trend: 'down', change: '-0.04' },
      { name: '江西', price: '4.78', kgPrice: '9.55', trend: 'stable', change: '0' },
      { name: '山东', price: '4.81', kgPrice: '9.61', trend: 'up', change: '+0.03' },
      { name: '河南', price: '4.78', kgPrice: '9.55', trend: 'stable', change: '0' },
      { name: '湖北', price: '4.78', kgPrice: '9.55', trend: 'stable', change: '0' },
      { name: '湖南', price: '4.81', kgPrice: '9.61', trend: 'up', change: '+0.03' },
      { name: '广东', price: '4.91', kgPrice: '9.81', trend: 'down', change: '-0.04' },
      { name: '广西', price: '4.75', kgPrice: '9.49', trend: 'down', change: '-0.03' },
      { name: '海南', price: '5.02', kgPrice: '10.03', trend: 'up', change: '+0.08' },
      { name: '重庆', price: '4.75', kgPrice: '9.49', trend: 'stable', change: '0' },
      { name: '四川', price: '4.71', kgPrice: '9.41', trend: 'down', change: '-0.03' },
      { name: '贵州', price: '4.68', kgPrice: '9.35', trend: 'stable', change: '0' },
      { name: '云南', price: '4.62', kgPrice: '9.23', trend: 'down', change: '-0.04' },
      { name: '西藏', price: '5.15', kgPrice: '10.29', trend: 'stable', change: '0' },
      { name: '陕西', price: '4.78', kgPrice: '9.55', trend: 'up', change: '+0.03' },
      { name: '甘肃', price: '4.75', kgPrice: '9.49', trend: 'stable', change: '0' },
      { name: '青海', price: '4.62', kgPrice: '9.23', trend: 'stable', change: '0' },
      { name: '宁夏', price: '4.58', kgPrice: '9.15', trend: 'down', change: '-0.03' },
      { name: '新疆', price: '4.52', kgPrice: '9.03', trend: 'down', change: '-0.08' }
    ],
    sortBy: 'price',
    sortOrder: 'desc',
    avgPrice: '4.81',
    maxPrice: '5.15',
    minPrice: '4.52',
    avgKgPrice: '9.61',
    maxKgPrice: '10.29',
    minKgPrice: '9.03',
    grainData: {
      corn: '2379',
      cornChange: '-9',
      soybean: '2920',
      soybeanChange: '+2',
      pigGrainRatio: '4.04:1'
    }
  },

  onLoad() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    
    this.setData({
      currentDate: `${year}-${month}-${day}`,
      updateTime: `${year}-${month}-${day} ${hour}:${minute}`
    })
    
    this.calculateStats()
  },

  selectType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ selectedType: type })
  },

  calculateStats() {
    const { provinces } = this.data
    const prices = provinces.map(p => parseFloat(p.price))
    const kgPrices = provinces.map(p => parseFloat(p.kgPrice))
    
    this.setData({
      avgPrice: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
      maxPrice: Math.max(...prices).toFixed(2),
      minPrice: Math.min(...prices).toFixed(2),
      avgKgPrice: (kgPrices.reduce((a, b) => a + b, 0) / kgPrices.length).toFixed(2),
      maxKgPrice: Math.max(...kgPrices).toFixed(2),
      minKgPrice: Math.min(...kgPrices).toFixed(2)
    })
  },

  sortByPrice() {
    const { provinces, sortBy, sortOrder } = this.data
    const newOrder = sortBy === 'price' && sortOrder === 'desc' ? 'asc' : 'desc'
    const sorted = [...provinces].sort((a, b) => {
      const priceA = parseFloat(a.price)
      const priceB = parseFloat(b.price)
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

  onShareAppMessage() {
    return {
      title: `今日猪价 ${this.data.currentDate} 外三元${this.data.pigTypes[0].price}元/斤`,
      path: '/pages/index/index'
    }
  }
})

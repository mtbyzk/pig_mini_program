// pages/city-price/city-price.js
Page({
  data: {
    selectedProvince: '',
    selectedProvinceName: '请选择省份',
    provinces: [
      { code: '110000', name: '北京' },
      { code: '120000', name: '天津' },
      { code: '130000', name: '河北' },
      { code: '140000', name: '山西' },
      { code: '150000', name: '内蒙古' },
      { code: '210000', name: '辽宁' },
      { code: '220000', name: '吉林' },
      { code: '230000', name: '黑龙江' },
      { code: '310000', name: '上海' },
      { code: '320000', name: '江苏' },
      { code: '330000', name: '浙江' },
      { code: '340000', name: '安徽' },
      { code: '350000', name: '福建' },
      { code: '360000', name: '江西' },
      { code: '370000', name: '山东' },
      { code: '410000', name: '河南' },
      { code: '420000', name: '湖北' },
      { code: '430000', name: '湖南' },
      { code: '440000', name: '广东' },
      { code: '450000', name: '广西' },
      { code: '460000', name: '海南' },
      { code: '500000', name: '重庆' },
      { code: '510000', name: '四川' },
      { code: '520000', name: '贵州' },
      { code: '530000', name: '云南' },
      { code: '540000', name: '西藏' },
      { code: '610000', name: '陕西' },
      { code: '620000', name: '甘肃' },
      { code: '630000', name: '青海' },
      { code: '640000', name: '宁夏' },
      { code: '650000', name: '新疆' }
    ],
    cities: [],
    loading: false,
    showProvincePicker: false
  },

  onLoad() {
    // 默认选择四川
    this.selectProvince({ code: '510000', name: '四川' })
  },

  // 显示省份选择器
  showProvincePicker() {
    this.setData({ showProvincePicker: true })
  },

  // 隐藏省份选择器
  hideProvincePicker() {
    this.setData({ showProvincePicker: false })
  },

  // 选择省份
  selectProvince(province) {
    this.setData({
      selectedProvince: province.code,
      selectedProvinceName: province.name,
      showProvincePicker: false,
      loading: true
    })
    
    this.loadCityData(province.code)
  },

  // 加载城市数据
  loadCityData(provinceCode) {
    // 模拟API调用 - 实际项目中应使用wx.request
    // 由于小程序安全限制，这里使用预设数据
    const cityData = this.getCityDataByProvince(provinceCode)
    
    setTimeout(() => {
      this.setData({
        cities: cityData,
        loading: false
      })
    }, 500)
  },

  // 获取省份城市数据（预设数据）
  getCityDataByProvince(provinceCode) {
    const allCityData = {
      '510000': [ // 四川
        { name: '成都市', price: '4.53', kgPrice: '9.06', trend: 'stable' },
        { name: '自贡市', price: '4.51', kgPrice: '9.02', trend: 'down' },
        { name: '攀枝花市', price: '4.52', kgPrice: '9.04', trend: 'stable' },
        { name: '泸州市', price: '4.50', kgPrice: '8.99', trend: 'down' },
        { name: '德阳市', price: '4.54', kgPrice: '9.08', trend: 'up' },
        { name: '绵阳市', price: '4.54', kgPrice: '9.08', trend: 'up' },
        { name: '广元市', price: '4.51', kgPrice: '9.02', trend: 'stable' },
        { name: '遂宁市', price: '4.52', kgPrice: '9.04', trend: 'stable' },
        { name: '内江市', price: '4.58', kgPrice: '9.15', trend: 'up' },
        { name: '乐山市', price: '4.54', kgPrice: '9.08', trend: 'stable' },
        { name: '南充市', price: '4.51', kgPrice: '9.03', trend: 'down' },
        { name: '眉山市', price: '4.49', kgPrice: '8.98', trend: 'down' },
        { name: '宜宾市', price: '4.58', kgPrice: '9.15', trend: 'up' },
        { name: '广安市', price: '4.53', kgPrice: '9.06', trend: 'stable' },
        { name: '达州市', price: '4.51', kgPrice: '9.03', trend: 'down' },
        { name: '雅安市', price: '4.52', kgPrice: '9.04', trend: 'stable' },
        { name: '巴中市', price: '4.57', kgPrice: '9.13', trend: 'up' },
        { name: '资阳市', price: '4.49', kgPrice: '8.97', trend: 'down' },
        { name: '阿坝藏族羌族自治州', price: '4.53', kgPrice: '9.06', trend: 'stable' },
        { name: '甘孜藏族自治州', price: '4.53', kgPrice: '9.05', trend: 'stable' },
        { name: '凉山彝族自治州', price: '4.53', kgPrice: '9.05', trend: 'stable' }
      ],
      '440000': [ // 广东
        { name: '广州市', price: '5.25', kgPrice: '10.50', trend: 'up' },
        { name: '深圳市', price: '5.30', kgPrice: '10.60', trend: 'up' },
        { name: '珠海市', price: '5.20', kgPrice: '10.40', trend: 'stable' },
        { name: '汕头市', price: '5.15', kgPrice: '10.30', trend: 'down' },
        { name: '佛山市', price: '5.22', kgPrice: '10.44', trend: 'up' },
        { name: '韶关市', price: '5.10', kgPrice: '10.20', trend: 'stable' },
        { name: '湛江市', price: '5.05', kgPrice: '10.10', trend: 'down' },
        { name: '茂名市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '肇庆市', price: '5.18', kgPrice: '10.35', trend: 'up' },
        { name: '惠州市', price: '5.20', kgPrice: '10.40', trend: 'up' },
        { name: '梅州市', price: '5.12', kgPrice: '10.24', trend: 'stable' },
        { name: '汕尾市', price: '5.10', kgPrice: '10.20', trend: 'down' },
        { name: '河源市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '阳江市', price: '5.15', kgPrice: '10.30', trend: 'up' },
        { name: '清远市', price: '5.12', kgPrice: '10.24', trend: 'stable' },
        { name: '东莞市', price: '5.25', kgPrice: '10.50', trend: 'up' },
        { name: '中山市', price: '5.22', kgPrice: '10.44', trend: 'up' },
        { name: '潮州市', price: '5.10', kgPrice: '10.20', trend: 'down' },
        { name: '揭阳市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '云浮市', price: '5.05', kgPrice: '10.10', trend: 'down' }
      ],
      '370000': [ // 山东
        { name: '济南市', price: '5.00', kgPrice: '9.99', trend: 'up' },
        { name: '青岛市', price: '5.05', kgPrice: '10.10', trend: 'up' },
        { name: '淄博市', price: '4.98', kgPrice: '9.95', trend: 'stable' },
        { name: '枣庄市', price: '4.95', kgPrice: '9.89', trend: 'down' },
        { name: '东营市', price: '4.97', kgPrice: '9.93', trend: 'stable' },
        { name: '烟台市', price: '5.02', kgPrice: '10.04', trend: 'up' },
        { name: '潍坊市', price: '4.98', kgPrice: '9.95', trend: 'stable' },
        { name: '济宁市', price: '4.95', kgPrice: '9.89', trend: 'down' },
        { name: '泰安市', price: '4.97', kgPrice: '9.93', trend: 'stable' },
        { name: '威海市', price: '5.00', kgPrice: '9.99', trend: 'up' },
        { name: '日照市', price: '4.98', kgPrice: '9.95', trend: 'stable' },
        { name: '临沂市', price: '4.95', kgPrice: '9.89', trend: 'down' },
        { name: '德州市', price: '4.97', kgPrice: '9.93', trend: 'stable' },
        { name: '聊城市', price: '4.95', kgPrice: '9.89', trend: 'down' },
        { name: '滨州市', price: '4.97', kgPrice: '9.93', trend: 'stable' },
        { name: '菏泽市', price: '4.95', kgPrice: '9.89', trend: 'down' }
      ],
      '410000': [ // 河南
        { name: '郑州市', price: '4.90', kgPrice: '9.79', trend: 'stable' },
        { name: '开封市', price: '4.88', kgPrice: '9.75', trend: 'down' },
        { name: '洛阳市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '平顶山市', price: '4.85', kgPrice: '9.69', trend: 'stable' },
        { name: '安阳市', price: '4.88', kgPrice: '9.75', trend: 'stable' },
        { name: '鹤壁市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '新乡市', price: '4.88', kgPrice: '9.75', trend: 'stable' },
        { name: '焦作市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '濮阳市', price: '4.88', kgPrice: '9.75', trend: 'stable' },
        { name: '许昌市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '漯河市', price: '4.85', kgPrice: '9.69', trend: 'stable' },
        { name: '三门峡市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '南阳市', price: '4.88', kgPrice: '9.75', trend: 'stable' },
        { name: '商丘市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '信阳市', price: '4.85', kgPrice: '9.69', trend: 'stable' },
        { name: '周口市', price: '4.88', kgPrice: '9.75', trend: 'stable' },
        { name: '驻马店市', price: '4.87', kgPrice: '9.73', trend: 'down' },
        { name: '济源市', price: '4.87', kgPrice: '9.73', trend: 'down' }
      ],
      '320000': [ // 江苏
        { name: '南京市', price: '5.08', kgPrice: '10.15', trend: 'up' },
        { name: '无锡市', price: '5.10', kgPrice: '10.20', trend: 'up' },
        { name: '徐州市', price: '5.02', kgPrice: '10.04', trend: 'stable' },
        { name: '常州市', price: '5.08', kgPrice: '10.15', trend: 'up' },
        { name: '苏州市', price: '5.12', kgPrice: '10.24', trend: 'up' },
        { name: '南通市', price: '5.05', kgPrice: '10.10', trend: 'stable' },
        { name: '连云港市', price: '5.02', kgPrice: '10.04', trend: 'down' },
        { name: '淮安市', price: '5.00', kgPrice: '9.99', trend: 'stable' },
        { name: '盐城市', price: '5.02', kgPrice: '10.04', trend: 'stable' },
        { name: '扬州市', price: '5.05', kgPrice: '10.10', trend: 'up' },
        { name: '镇江市', price: '5.05', kgPrice: '10.10', trend: 'up' },
        { name: '泰州市', price: '5.05', kgPrice: '10.10', trend: 'up' },
        { name: '宿迁市', price: '5.00', kgPrice: '9.99', trend: 'stable' }
      ],
      '330000': [ // 浙江
        { name: '杭州市', price: '5.12', kgPrice: '10.24', trend: 'up' },
        { name: '宁波市', price: '5.15', kgPrice: '10.30', trend: 'up' },
        { name: '温州市', price: '5.10', kgPrice: '10.20', trend: 'stable' },
        { name: '嘉兴市', price: '5.12', kgPrice: '10.24', trend: 'up' },
        { name: '湖州市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '绍兴市', price: '5.10', kgPrice: '10.20', trend: 'up' },
        { name: '金华市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '衢州市', price: '5.05', kgPrice: '10.10', trend: 'down' },
        { name: '舟山市', price: '5.10', kgPrice: '10.20', trend: 'stable' },
        { name: '台州市', price: '5.08', kgPrice: '10.15', trend: 'stable' },
        { name: '丽水市', price: '5.05', kgPrice: '10.10', trend: 'down' }
      ],
      '340000': [ // 安徽
        { name: '合肥市', price: '4.98', kgPrice: '9.95', trend: 'up' },
        { name: '芜湖市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '蚌埠市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '淮南市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '马鞍山市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '淮北市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '铜陵市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '安庆市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '黄山市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '滁州市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '阜阳市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '宿州市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '六安市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '亳州市', price: '4.92', kgPrice: '9.83', trend: 'down' },
        { name: '池州市', price: '4.95', kgPrice: '9.89', trend: 'stable' },
        { name: '宣城市', price: '4.92', kgPrice: '9.83', trend: 'down' }
      ]
    }
    
    return allCityData[provinceCode] || []
  },

  // 切换省份
  onProvinceChange(e) {
    const index = e.detail.value
    const province = this.data.provinces[index]
    this.selectProvince(province)
  },

  // 分享
  onShareAppMessage() {
    return {
      title: `今日猪价 - ${this.data.selectedProvinceName}`,
      path: '/pages/index/index'
    }
  }
})

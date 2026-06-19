// pages/vaccination/vaccination.js
Page({
  data: {
    selectedStage: 'all',
    stages: [
      { key: 'all', label: '全部' },
      { key: 'born', label: '初生仔猪' },
      { key: 'suckling', label: '哺乳期' },
      { key: 'weaning', label: '断奶期' },
      { key: 'growing', label: '生长期' },
      { key: 'breeding', label: '配种期' },
      { key: 'gestation', label: '妊娠期' },
      { key: 'lactation', label: '哺乳母猪' }
    ],
    vaccines: [
      {
        id: 'v01',
        name: '猪瘟疫苗',
        stage: 'born',
        stageName: '初生仔猪',
        time: '出生后20-25天',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '首免，60天二免',
        importance: 'high'
      },
      {
        id: 'v02',
        name: '伪狂犬疫苗',
        stage: 'born',
        stageName: '初生仔猪',
        time: '出生后1-3天',
        dosage: '0.5头份',
        route: '滴鼻',
        notes: '滴鼻免疫，每侧鼻孔0.25ml',
        importance: 'high'
      },
      {
        id: 'v03',
        name: '支原体疫苗',
        stage: 'suckling',
        stageName: '哺乳期',
        time: '7-14日龄',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防气喘病',
        importance: 'medium'
      },
      {
        id: 'v04',
        name: '圆环病毒疫苗',
        stage: 'suckling',
        stageName: '哺乳期',
        time: '14-21日龄',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防圆环病毒病',
        importance: 'high'
      },
      {
        id: 'v05',
        name: '副伤寒疫苗',
        stage: 'weaning',
        stageName: '断奶期',
        time: '30-35日龄',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防沙门氏菌感染',
        importance: 'medium'
      },
      {
        id: 'v06',
        name: '口蹄疫疫苗',
        stage: 'weaning',
        stageName: '断奶期',
        time: '60-70日龄',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '首免，90天二免',
        importance: 'high'
      },
      {
        id: 'v07',
        name: '猪丹毒疫苗',
        stage: 'growing',
        stageName: '生长期',
        time: '70-80日龄',
        dosage: '1头份',
        route: '皮下注射',
        notes: '预防猪丹毒',
        importance: 'medium'
      },
      {
        id: 'v08',
        name: '猪肺疫疫苗',
        stage: 'growing',
        stageName: '生长期',
        time: '70-80日龄',
        dosage: '1头份',
        route: '皮下注射',
        notes: '预防猪肺疫',
        importance: 'medium'
      },
      {
        id: 'v09',
        name: '细小病毒疫苗',
        stage: 'breeding',
        stageName: '配种期',
        time: '配种前4-6周',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防繁殖障碍，经产母猪每次配种前接种',
        importance: 'high'
      },
      {
        id: 'v10',
        name: '乙脑疫苗',
        stage: 'breeding',
        stageName: '配种期',
        time: '配种前1-2月',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防乙型脑炎，蚊虫季节前接种',
        importance: 'medium'
      },
      {
        id: 'v11',
        name: '蓝耳病疫苗',
        stage: 'gestation',
        stageName: '妊娠期',
        time: '妊娠60-90天',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '根据猪场情况决定是否接种',
        importance: 'high'
      },
      {
        id: 'v12',
        name: '猪瘟疫苗（母猪）',
        stage: 'gestation',
        stageName: '妊娠期',
        time: '妊娠30-60天',
        dosage: '2头份',
        route: '肌肉注射',
        notes: '加强免疫，提高母源抗体',
        importance: 'high'
      },
      {
        id: 'v13',
        name: '大肠杆菌疫苗',
        stage: 'lactation',
        stageName: '哺乳母猪',
        time: '产前40天、20天',
        dosage: '1头份',
        route: '肌肉注射',
        notes: '预防仔猪黄白痢，产前接种2次',
        importance: 'high'
      },
      {
        id: 'v14',
        name: '腹泻疫苗',
        stage: 'lactation',
        stageName: '哺乳母猪',
        time: '产前20-30天',
        dosage: '1头份',
        route: '后海穴注射',
        notes: '预防传染性胃肠炎、流行性腹泻',
        importance: 'high'
      }
    ],
    filteredVaccines: []
  },

  onLoad() {
    this.filterVaccines()
  },

  selectStage(e) {
    const stage = e.currentTarget.dataset.stage
    this.setData({ selectedStage: stage })
    this.filterVaccines()
  },

  filterVaccines() {
    const { vaccines, selectedStage } = this.data
    const filtered = selectedStage === 'all' 
      ? vaccines 
      : vaccines.filter(v => v.stage === selectedStage)
    this.setData({ filteredVaccines: filtered })
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 疫苗接种流程',
      path: '/pages/index/index'
    }
  }
})

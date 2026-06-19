// pages/breeding-tips/breeding-tips.js
Page({
  data: {
    selectedCategory: 'all',
    categories: [
      { key: 'all', label: '全部' },
      { key: 'feeding', label: '饲养管理' },
      { key: 'environment', label: '环境控制' },
      { key: 'disease', label: '疾病预防' },
      { key: 'breeding', label: '繁殖技术' },
      { key: 'nutrition', label: '营养配方' }
    ],
    tips: [
      {
        id: 't01',
        category: 'feeding',
        categoryName: '饲养管理',
        title: '仔猪早期补料技巧',
        summary: '仔猪7日龄开始补料，选择适口性好的教槽料...',
        content: '仔猪7日龄开始补料，选择适口性好的教槽料。将少量饲料放在仔猪嘴边，每天3-5次，逐渐增加量。10-14天后仔猪会主动采食。',
        icon: '🍖',
        date: '2024-01-15'
      },
      {
        id: 't02',
        category: 'environment',
        categoryName: '环境控制',
        title: '夏季猪舍降温方法',
        summary: '使用湿帘风机降温系统，保持舍内温度...',
        content: '1. 湿帘风机降温：安装湿帘和负压风机，可降温5-8℃。2. 喷雾降温：定时喷雾，注意通风。3. 遮阳网：猪舍顶部安装遮阳网。4. 保证充足饮水：水温控制在15-20℃。',
        icon: '🌡️',
        date: '2024-01-12'
      },
      {
        id: 't03',
        category: 'disease',
        categoryName: '疾病预防',
        title: '猪场消毒制度建立',
        summary: '建立科学的消毒制度，定期对猪舍、通道...',
        content: '1. 日常消毒：每周2-3次带猪消毒。2. 空栏消毒：清栏后彻底清洗消毒。3. 环境消毒：每月1次全场消毒。4. 消毒药交替使用：避免产生耐药性。5. 消毒药选择：过硫酸氢钾、戊二醛、聚维酮碘等。',
        icon: '🧴',
        date: '2024-01-10'
      },
      {
        id: 't04',
        category: 'breeding',
        categoryName: '繁殖技术',
        title: '母猪发情鉴定方法',
        summary: '通过观察外阴变化、行为表现判断发情...',
        content: '1. 外阴变化：红肿、有黏液流出。2. 行为表现：站立不动、接受爬跨。3. 压背反射：按压背部静止不动。4. 最佳配种时间：发情后24-36小时。5. 配种次数：间隔12小时配种2次。',
        icon: '💕',
        date: '2024-01-08'
      },
      {
        id: 't05',
        category: 'nutrition',
        categoryName: '营养配方',
        title: '不同阶段猪的营养需求',
        summary: '仔猪、育肥猪、母猪各阶段营养需求不同...',
        content: '1. 仔猪（断奶-15kg）：粗蛋白20-22%，消化能3400kcal/kg。2. 育肥猪（15-30kg）：粗蛋白18-20%，消化能3300kcal/kg。3. 育肥猪（30-60kg）：粗蛋白16-18%，消化能3200kcal/kg。4. 妊娠母猪：粗蛋白14-16%，消化能3100kcal/kg。5. 哺乳母猪：粗蛋白17-19%，消化能3300kcal/kg。',
        icon: '🌾',
        date: '2024-01-05'
      },
      {
        id: 't06',
        category: 'feeding',
        categoryName: '饲养管理',
        title: '断奶仔猪管理要点',
        summary: '断奶仔猪应激大，需要特别注意...',
        content: '1. 断奶时间：21-28天。2. 断奶前补料：7日龄开始。3. 断奶后限料：3天内控料，防止腹泻。4. 环境温度：保持28-30℃。5. 饮水：保证充足清洁饮水。6. 少量多餐：每天4-6次。',
        icon: '🐷',
        date: '2024-01-03'
      },
      {
        id: 't07',
        category: 'environment',
        categoryName: '环境控制',
        title: '冬季猪舍保温措施',
        summary: '保持舍内温度适宜，防止贼风...',
        content: '1. 保温灯：仔猪区使用保温灯。2. 地暖：安装地暖系统。3. 堵风：检查门窗缝隙。4. 通风：保证空气质量。5. 密度：适当增加饲养密度。6. 垫料：使用干燥垫料。',
        icon: '🔥',
        date: '2024-01-01'
      },
      {
        id: 't08',
        category: 'disease',
        categoryName: '疾病预防',
        title: '猪场驱虫程序',
        summary: '定期驱虫，保持猪群健康...',
        content: '1. 种猪：每季度驱虫1次。2. 仔猪：断奶时驱虫1次。3. 育肥猪：60日龄驱虫1次。4. 驱虫药选择：阿维菌素、伊维菌素、阿苯达唑等。5. 注意事项：驱虫后清理粪便，消毒环境。',
        icon: '💊',
        date: '2023-12-28'
      },
      {
        id: 't09',
        category: 'breeding',
        categoryName: '繁殖技术',
        title: '人工授精技术要点',
        summary: '掌握正确的人工授精技术...',
        content: '1. 精液保存：17℃恒温保存。2. 输精时间：发情后24-36小时。3. 输精量：80-100ml。4. 输精速度：3-5分钟完成。5. 输精后：保持静止5分钟。6. 复配：间隔12小时再次输精。',
        icon: '🧬',
        date: '2023-12-25'
      },
      {
        id: 't10',
        category: 'nutrition',
        categoryName: '营养配方',
        title: '饲料添加剂使用技巧',
        summary: '合理使用饲料添加剂，提高饲料利用率...',
        content: '1. 酶制剂：提高饲料消化率。2. 益生菌：调节肠道菌群。3. 酸化剂：降低胃肠道pH值。4. 抗氧化剂：防止饲料氧化。5. 防霉剂：防止饲料霉变。6. 注意事项：按规定剂量使用，避免过量。',
        icon: '🧪',
        date: '2023-12-22'
      },
      {
        id: 't11',
        category: 'feeding',
        categoryName: '饲养管理',
        title: '育肥猪出栏时机判断',
        summary: '根据体重、背膘厚度、市场行情判断...',
        content: '1. 体重：110-120kg出栏最佳。2. 背膘：最后一肋背膘厚度15-18mm。3. 日增重：低于700g考虑出栏。4. 料肉比：超过3.0考虑出栏。5. 市场行情：关注猪价走势。6. 季节：避开高温季节出栏。',
        icon: '📊',
        date: '2023-12-20'
      },
      {
        id: 't12',
        category: 'environment',
        categoryName: '环境控制',
        title: '猪场粪污处理方法',
        summary: '科学处理粪污，保护环境...',
        content: '1. 干湿分离：使用固液分离机。2. 堆肥发酵：制作有机肥。3. 沼气发酵：生产清洁能源。4. 污水处理：达标排放。5. 种养结合：粪污还田。6. 环保设施：建设防渗漏储粪池。',
        icon: '♻️',
        date: '2023-12-18'
      }
    ],
    filteredTips: []
  },

  onLoad() {
    this.filterTips()
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ selectedCategory: category })
    this.filterTips()
  },

  filterTips() {
    const { tips, selectedCategory } = this.data
    const filtered = selectedCategory === 'all'
      ? tips
      : tips.filter(t => t.category === selectedCategory)
    this.setData({ filteredTips: filtered })
  },

  viewTipDetail(e) {
    const { title, content } = e.currentTarget.dataset
    wx.showModal({
      title: title,
      content: content,
      showCancel: false,
      confirmText: '知道了'
    })
  },

  onShareAppMessage() {
    return {
      title: '猪病诊断助手 - 养殖技巧',
      path: '/pages/index/index'
    }
  }
})

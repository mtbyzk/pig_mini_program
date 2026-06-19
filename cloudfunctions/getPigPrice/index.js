// cloudfunctions/getPigPrice/index.js
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log('开始获取猪价数据...')
    
    // 获取全国猪价数据
    const nationalData = await fetchNationalPrice()
    
    // 获取各省猪价数据
    const provincialData = await fetchProvincialPrices()
    
    // 获取饲料数据
    const feedData = await fetchFeedPrices()
    
    const result = {
      success: true,
      updateTime: new Date().toISOString(),
      national: nationalData,
      provinces: provincialData,
      feed: feedData
    }
    
    console.log('猪价数据获取成功')
    return result
    
  } catch (error) {
    console.error('获取猪价数据失败:', error)
    return {
      success: false,
      error: error.message,
      updateTime: new Date().toISOString()
    }
  }
}

// 获取全国猪价数据
async function fetchNationalPrice() {
  try {
    const response = await axios.get('https://zhujia.zhuwang.com.cn/', {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })
    
    const html = response.data
    
    // 解析外三元价格
    const outer3Match = html.match(/生猪\(外三元\)[\s\S]*?(\d+\.\d+)\s*元\/公斤/)
    const inner3Match = html.match(/生猪\(内三元\)[\s\S]*?(\d+\.\d+)\s*元\/公斤/)
    const localMatch = html.match(/生猪\(土杂猪\)[\s\S]*?(\d+\.\d+)\s*元\/公斤/)
    const cornMatch = html.match(/玉米[\s\S]*?(\d+)\s*元\/吨/)
    const soybeanMatch = html.match(/豆粕[\s\S]*?(\d+)\s*元\/吨/)
    const ratioMatch = html.match(/猪粮比[\s\S]*?(\d+\.\d+):1/)
    
    return {
      outer3: outer3Match ? outer3Match[1] : null,
      inner3: inner3Match ? inner3Match[1] : null,
      local: localMatch ? localMatch[1] : null,
      corn: cornMatch ? cornMatch[1] : null,
      soybean: soybeanMatch ? soybeanMatch[1] : null,
      pigGrainRatio: ratioMatch ? ratioMatch[1] + ':1' : null
    }
  } catch (error) {
    console.error('获取全国猪价失败:', error)
    return null
  }
}

// 获取各省猪价数据
async function fetchProvincialPrices() {
  try {
    const response = await axios.get('https://zhujia.zhuwang.com.cn/api/getMapJson?id=-1', {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })
    
    const data = response.data
    
    if (!data || !data.features) {
      return []
    }
    
    const provinces = data.features.map(feature => {
      const props = feature.properties
      const kgPrice = parseFloat(props.pigprice) || 0
      const jinPrice = (kgPrice / 2).toFixed(2)
      
      return {
        name: props.fullname || props.name,
        kgPrice: kgPrice.toFixed(2),
        jinPrice: jinPrice,
        corn: props.maizeprice || 0,
        soybean: props.bean || 0,
        trend: 'stable',
        change: '0'
      }
    })
    
    return provinces
    
  } catch (error) {
    console.error('获取各省猪价失败:', error)
    return []
  }
}

// 获取饲料价格数据
async function fetchFeedPrices() {
  try {
    const response = await axios.get('https://zhujia.zhuwang.com.cn/', {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })
    
    const html = response.data
    
    // 解析饲料价格
    const cornMatch = html.match(/玉米[\s\S]*?(\d+)\s*元\/吨/)
    const soybeanMatch = html.match(/豆粕[\s\S]*?(\d+)\s*元\/吨/)
    const ratioMatch = html.match(/猪粮比[\s\S]*?(\d+\.\d+):1/)
    
    return {
      corn: cornMatch ? cornMatch[1] : null,
      soybean: soybeanMatch ? soybeanMatch[1] : null,
      pigGrainRatio: ratioMatch ? ratioMatch[1] + ':1' : null
    }
  } catch (error) {
    console.error('获取饲料价格失败:', error)
    return null
  }
}

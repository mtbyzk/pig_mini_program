// data/diseases.js - 疾病数据（完整版，含分型和鉴别要点）
const diseases = [
  {
    "id": "d01", "name": "猪瘟", "alias": "烂肠瘟",
    "description": "猪瘟是由猪瘟病毒引起的一种急性、热性、高度接触性传染病。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "5-7天", "mortality_rate": "急性型可达90%以上",
    "disease_types": [
      {"name": "最急性型", "symptoms": ["突然发病，高热41℃以上", "无明显症状即死亡", "死亡率极高"]},
      {"name": "急性型", "symptoms": ["高热稽留41℃以上", "先便秘后腹泻，粪便恶臭", "皮肤有出血点，耳根、腹部、四肢内侧明显", "眼结膜有脓性分泌物", "精神沉郁，食欲废绝"]},
      {"name": "慢性型", "symptoms": ["消瘦，生长缓慢", "间歇性腹泻", "皮肤坏死，耳朵干枯"]},
      {"name": "温和型", "symptoms": ["症状不明显", "轻微发热", "繁殖障碍，流产、死胎"]},
      {"name": "迟发型", "symptoms": ["先天感染仔猪", "出生后震颤", "发育不良"]},
      {"name": "持续感染型", "symptoms": ["无明显症状", "长期带毒排毒"]},
      {"name": "神经型", "symptoms": ["抽搐", "共济失调", "角弓反张"]},
      {"name": "繁殖障碍型", "symptoms": ["母猪流产", "死胎", "木乃伊胎", "弱仔"]},
      {"name": "混合感染型", "symptoms": ["与其他病原混合感染", "症状复杂多样"]}
    ],
    "characteristic_symptoms": ["高热稽留不退，体温持续41℃以上", "先便秘后腹泻，粪便恶臭", "皮肤有出血点，尤以耳根、腹部、四肢内侧明显", "眼结膜有脓性分泌物"],
    "differential_diagnosis": [
      {"disease": "非洲猪瘟", "points": "非洲猪瘟更急更快，皮肤发绀更明显，无特效疫苗"},
      {"disease": "猪丹毒", "points": "猪丹毒皮肤菱形疹块，青霉素治疗有效"},
      {"disease": "猪肺疫", "points": "猪肺疫咽喉部肿胀，呼吸困难更明显"}
    ],
    "prevention": "定期接种猪瘟疫苗，加强饲养管理，严格检疫制度。"
  },
  {
    "id": "d02", "name": "非洲猪瘟", "alias": "ASF",
    "description": "非洲猪瘟是由非洲猪瘟病毒引起的一种急性、出血性、高致死性传染病。目前尚无有效疫苗。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "5-19天", "mortality_rate": "可达100%",
    "disease_types": [
      {"name": "最急性型", "symptoms": ["突然死亡，无明显症状", "高热41℃以上", "死亡率接近100%"]},
      {"name": "急性型", "symptoms": ["高热41℃以上", "皮肤发绀，耳、四肢、腹下皮肤紫绀", "呕吐，腹泻带血", "流产、死胎", "食欲废绝，精神沉郁"]},
      {"name": "亚急性型", "symptoms": ["发热，体温波动", "呼吸困难", "关节肿胀", "皮肤出血点"]},
      {"name": "慢性型", "symptoms": ["消瘦", "皮肤溃疡", "关节炎", "肺炎症状"]}
    ],
    "characteristic_symptoms": ["高热41℃以上", "皮肤发绀，耳、四肢、腹下皮肤紫绀", "呕吐，腹泻带血", "流产、死胎"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟病程较长，皮肤出血点而非发绀"},
      {"disease": "猪丹毒", "points": "猪丹毒有菱形疹块，青霉素有效"},
      {"disease": "猪肺疫", "points": "猪肺疫咽喉肿胀，无血便"}
    ],
    "prevention": "目前无疫苗，防控以扑杀、无害化处理、严格消毒为主。"
  },
  {
    "id": "d07", "name": "猪传染性胸膜肺炎", "alias": "传胸、APP",
    "description": "猪传染性胸膜肺炎是由胸膜肺炎放线杆菌引起的一种高度接触性呼吸道传染病。3月龄以上育肥猪高发。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "1-2天", "mortality_rate": "急性型可达80-100%",
    "disease_types": [
      {"name": "最急性型", "symptoms": ["体温骤升至41-42℃", "精神崩溃，完全不吃料", "犬坐姿势，张口伸舌", "口鼻流出粉红色泡沫血性分泌物", "耳尖、鼻盘、四肢末端蓝紫色发绀", "1-36小时快速死亡"]},
      {"name": "急性型", "symptoms": ["体温40.5-41℃稽留高热", "全群扎堆、废食", "频繁湿咳、气喘", "站立时前肢撑开呈犬坐", "口鼻流出淡红色泡沫黏液", "全身发红，耳、腹下发紫"]},
      {"name": "亚急性型", "symptoms": ["体温轻度升高39.5-40.5℃", "持续性干咳", "间歇性喘气", "采食下降，生长停滞", "眼部分泌物增多、泪斑明显"]},
      {"name": "慢性型", "symptoms": ["体温基本正常", "仅早晚零星咳嗽", "料肉比大幅升高", "生长迟缓、消瘦", "长期带菌排毒"]}
    ],
    "characteristic_symptoms": ["高热、犬坐腹式呼吸", "口鼻流红色泡沫", "皮肤发绀", "急性猝死"],
    "differential_diagnosis": [
      {"disease": "支原体气喘病", "points": "气喘病体温正常，仅干咳，无口鼻血沫，不猝死"},
      {"disease": "副猪嗜血杆菌", "points": "副猪多发保育小猪，关节肿跛行，全身浆膜积液"},
      {"disease": "猪肺疫", "points": "猪肺疫颈部肿胀红肿，传胸无颈部肿大"}
    ],
    "prevention": "接种疫苗，改善通风，降低饲养密度。"
  },
  {
    "id": "d08", "name": "猪气喘病", "alias": "猪支原体肺炎",
    "description": "猪气喘病是由猪肺炎支原体引起的一种慢性呼吸道传染病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "10-16天", "mortality_rate": "单纯感染较低",
    "disease_types": [
      {"name": "急性型", "symptoms": ["呼吸困难", "腹式呼吸", "犬坐姿势", "精神沉郁"]},
      {"name": "慢性型", "symptoms": ["连续干咳，早晚明显", "生长缓慢", "食欲正常但消瘦"]},
      {"name": "隐性型", "symptoms": ["无明显症状", "仅在解剖时发现肺部病变"]}
    ],
    "characteristic_symptoms": ["连续干咳，尤其早晚明显", "呼吸困难，腹式呼吸", "生长缓慢", "食欲正常但消瘦"],
    "differential_diagnosis": [
      {"disease": "猪传染性胸膜肺炎", "points": "传胸有口鼻血沫，急性猝死，支原体无此症状"},
      {"disease": "猪肺疫", "points": "猪肺疫高热明显，咽喉肿胀"},
      {"disease": "萎缩性鼻炎", "points": "萎缩性鼻炎有鼻歪斜、打喷嚏"}
    ],
    "prevention": "接种疫苗，药物预防，改善饲养环境。"
  },
  {
    "id": "d13", "name": "猪链球菌病", "alias": "链球菌感染",
    "description": "猪链球菌病是由多种链球菌引起的人畜共患传染病。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "1-3天", "mortality_rate": "急性败血型和脑膜炎型较高",
    "disease_types": [
      {"name": "败血型", "symptoms": ["高热41.5℃以上", "全身皮肤发红发紫", "口鼻淡红色泡沫", "精神沉郁，食欲废绝"]},
      {"name": "脑膜炎型", "symptoms": ["转圈运动", "头歪一侧", "共济失调", "倒地四肢划水样", "角弓反张"]},
      {"name": "关节炎型", "symptoms": ["跛行", "腕关节、跗关节肿大发热", "触摸疼痛", "站立困难"]},
      {"name": "淋巴结脓肿型", "symptoms": ["颌下、咽部淋巴结肿大", "化脓", "破溃流脓"]}
    ],
    "characteristic_symptoms": ["败血型：高热41.5℃以上，全身皮肤发红发紫", "脑膜炎型：转圈、头歪一侧、共济失调", "关节炎型：跛行、腕关节跗关节肿大发热"],
    "differential_diagnosis": [
      {"disease": "猪丹毒", "points": "猪丹毒有菱形疹块，关节炎型链球菌无疹块"},
      {"disease": "李氏杆菌病", "points": "李氏杆菌也转圈，但无关节肿大"},
      {"disease": "副猪嗜血杆菌", "points": "副猪多浆膜积液，链球菌以关节炎为主"}
    ],
    "prevention": "接种疫苗，加强消毒，减少应激。"
  },
  {
    "id": "d11", "name": "猪丹毒", "alias": "打火印",
    "description": "猪丹毒是由猪丹毒杆菌引起的一种急性、热性传染病。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "3-5天", "mortality_rate": "急性型可达80%以上",
    "disease_types": [
      {"name": "急性败血型", "symptoms": ["高热42℃以上", "皮肤菱形或方形紫红色疹块", "疹块凸出于皮肤表面", "精神沉郁，食欲废绝"]},
      {"name": "亚急性疹块型", "symptoms": ["体温41℃左右", "皮肤出现方形疹块", "疹块中央坏死", "病程较长"]},
      {"name": "慢性型", "symptoms": ["关节肿大", "心内膜炎", "皮肤坏死"]}
    ],
    "characteristic_symptoms": ["高热42℃以上", "皮肤出现菱形或方形紫红色疹块", "疹块凸出于皮肤表面", "慢性型关节肿大"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟皮肤出血点而非疹块，青霉素无效"},
      {"disease": "猪链球菌病", "points": "链球菌无菱形疹块"},
      {"disease": "猪肺疫", "points": "猪肺疫咽喉肿胀，无疹块"}
    ],
    "prevention": "接种猪丹毒疫苗，青霉素治疗效果好。"
  },
  {
    "id": "d12", "name": "猪肺疫", "alias": "猪巴氏杆菌病",
    "description": "猪肺疫是由多杀性巴氏杆菌引起的一种急性传染病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "1-5天", "mortality_rate": "急性型可达70%",
    "disease_types": [
      {"name": "最急性型", "symptoms": ["高热", "咽喉部急剧肿胀", "呼吸极度困难", "窒息死亡"]},
      {"name": "急性型", "symptoms": ["高热、呼吸困难", "咽喉部肿胀", "口鼻流泡沫", "犬坐姿势", "皮肤发绀"]},
      {"name": "慢性型", "symptoms": ["消瘦", "持续咳嗽", "关节肿胀"]}
    ],
    "characteristic_symptoms": ["高热、呼吸困难", "咽喉部肿胀", "口鼻流泡沫", "犬坐姿势"],
    "differential_diagnosis": [
      {"disease": "猪传染性胸膜肺炎", "points": "传胸无咽喉肿胀，有口鼻血沫"},
      {"disease": "猪丹毒", "points": "猪丹毒有菱形疹块，无咽喉肿胀"},
      {"disease": "猪气喘病", "points": "气喘病无高热，无咽喉肿胀"}
    ],
    "prevention": "接种疫苗，改善饲养管理。"
  },
  {
    "id": "d21", "name": "猪附红细胞体病", "alias": "附红体病",
    "description": "猪附红细胞体病是由附红细胞体寄生于红细胞表面引起的一种传染病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "3-7天", "mortality_rate": "较高",
    "disease_types": [
      {"name": "急性型", "symptoms": ["高热40-42℃", "贫血苍白", "黄疸", "皮肤发红", "呼吸困难"]},
      {"name": "慢性型", "symptoms": ["消瘦", "被毛粗乱", "皮肤苍白", "生长缓慢"]},
      {"name": "亚临床型", "symptoms": ["无明显症状", "仅血液检查可见病原"]}
    ],
    "characteristic_symptoms": ["高热", "贫血苍白", "黄疸", "皮肤发红"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟有皮肤出血点，附红体以贫血黄疸为主"},
      {"disease": "钩端螺旋体病", "points": "钩端螺旋体也有黄疸，但有血红蛋白尿"},
      {"disease": "猪弓形虫病", "points": "弓形虫有神经症状，附红体以贫血为主"}
    ],
    "prevention": "灭蚊驱虫，药物预防。"
  },
  {
    "id": "d22", "name": "猪弓形虫病", "alias": "弓形体病",
    "description": "猪弓形虫病是由龚地弓形虫引起的一种人畜共患寄生虫病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "3-7天", "mortality_rate": "急性型较高",
    "disease_types": [
      {"name": "急性型", "symptoms": ["高热41℃以上", "呼吸困难", "皮肤发绀", "神经症状", "便秘后腹泻"]},
      {"name": "慢性型", "symptoms": ["消瘦", "贫血", "生长缓慢"]},
      {"name": "隐性型", "symptoms": ["无明显症状", "仅血清学检查阳性"]}
    ],
    "characteristic_symptoms": ["高热41℃以上", "呼吸困难", "皮肤发绀", "神经症状"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟无呼吸困难，弓形虫呼吸症状明显"},
      {"disease": "猪附红细胞体病", "points": "附红体以贫血为主，弓形虫以发热为主"},
      {"disease": "猪蓝耳病", "points": "蓝耳病有繁殖障碍，弓形虫较少引起流产"}
    ],
    "prevention": "灭鼠，禁止养猫，药物预防。"
  },
  {
    "id": "d14", "name": "猪副伤寒", "alias": "猪沙门氏菌病",
    "description": "猪副伤寒是由沙门氏菌引起的一种传染病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "3-7天", "mortality_rate": "急性型较高",
    "disease_types": [
      {"name": "急性型", "symptoms": ["高热", "腹泻", "皮肤紫色斑点", "精神沉郁"]},
      {"name": "慢性型", "symptoms": ["持续下痢，粪便恶臭", "消瘦、贫血", "皮肤出现紫色斑点"]},
      {"name": "亚急性型", "symptoms": ["间歇性腹泻", "生长缓慢"]}
    ],
    "characteristic_symptoms": ["2-4月龄仔猪多发", "持续下痢，粪便恶臭", "皮肤出现紫色斑点", "消瘦、贫血"],
    "differential_diagnosis": [
      {"disease": "猪痢疾", "points": "猪痢疾血便为主，副伤寒以腹泻为主"},
      {"disease": "猪流行性腹泻", "points": "流行性腹泻水样腹泻，副伤寒粪便恶臭"},
      {"disease": "仔猪黄白痢", "points": "黄白痢日龄更小，无皮肤斑点"}
    ],
    "prevention": "接种副伤寒疫苗，加强饲养管理。"
  },
  {
    "id": "d15", "name": "猪伪狂犬病", "alias": "PR",
    "description": "猪伪狂犬病是由伪狂犬病病毒引起的一种急性传染病。",
    "severity": "high", "is_contagious": true,
    "incubation_period": "3-6天", "mortality_rate": "新生仔猪可达100%",
    "disease_types": [
      {"name": "新生仔猪型", "symptoms": ["神经症状明显", "震颤、划水样运动", "腹泻", "高热", "死亡率高"]},
      {"name": "保育猪型", "symptoms": ["发热", "呼吸困难", "神经症状", "死亡率中等"]},
      {"name": "育肥猪型", "symptoms": ["发热", "呼吸困难", "咳嗽", "死亡率低"]},
      {"name": "种猪型", "symptoms": ["母猪流产、死胎", "公猪睾丸肿胀", "配种障碍"]}
    ],
    "characteristic_symptoms": ["新生仔猪神经症状明显", "震颤、划水样运动", "母猪流产、死胎", "育肥猪呼吸困难"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟无神经症状，伪狂犬仔猪神经症状明显"},
      {"disease": "猪细小病毒病", "points": "细小病毒无仔猪死亡，伪狂犬仔猪死亡率高"},
      {"disease": "猪乙型脑炎", "points": "乙脑有明显季节性，伪狂犬无季节性"}
    ],
    "prevention": "接种伪狂犬疫苗，加强检疫。"
  },
  {
    "id": "d18", "name": "猪传染性胃肠炎", "alias": "TGE",
    "description": "猪传染性胃肠炎是由猪传染性胃肠炎病毒引起的一种高度接触性肠道传染病。",
    "severity": "medium", "is_contagious": true,
    "incubation_period": "1-3天", "mortality_rate": "仔猪可达100%",
    "disease_types": [
      {"name": "急性型", "symptoms": ["急性水样腹泻", "呕吐", "脱水", "2周龄内仔猪死亡率高"]},
      {"name": "慢性型", "symptoms": ["间歇性腹泻", "消瘦", "生长缓慢"]}
    ],
    "characteristic_symptoms": ["急性水样腹泻", "呕吐", "脱水", "2周龄内仔猪死亡率高"],
    "differential_diagnosis": [
      {"disease": "猪流行性腹泻", "points": "流行性腹泻传播较慢，TGE传播更快"},
      {"disease": "猪轮状病毒病", "points": "轮状病毒症状较轻，死亡率较低"},
      {"disease": "仔猪黄白痢", "points": "黄白痢无呕吐，TGE有明显呕吐"}
    ],
    "prevention": "接种TGE疫苗，加强保温。"
  },
  {
    "id": "d42", "name": "仔猪水肿病", "alias": "肠毒血症",
    "description": "仔猪水肿病是由溶血性大肠杆菌毒素引起的一种急性毒血症，多发于断奶后仔猪。",
    "severity": "high", "is_contagious": false,
    "incubation_period": "1-2天", "mortality_rate": "可达80%以上",
    "disease_types": [
      {"name": "急性型", "symptoms": ["眼睑水肿", "头部水肿", "共济失调", "尖叫、抽搐", "突然死亡"]},
      {"name": "亚急性型", "symptoms": ["轻度水肿", "步态不稳", "食欲减退"]}
    ],
    "characteristic_symptoms": ["眼睑水肿", "头部水肿", "共济失调", "尖叫、抽搐、突然死亡"],
    "differential_diagnosis": [
      {"disease": "猪瘟", "points": "猪瘟无水肿症状"},
      {"disease": "猪伪狂犬病", "points": "伪狂犬有呼吸症状，水肿病以神经症状为主"},
      {"disease": "李氏杆菌病", "points": "李氏杆菌无水肿，有面神经麻痹"}
    ],
    "prevention": "断奶后逐渐换料，避免饲料突变，减少应激。"
  },
  {
    "id": "d43", "disease_name": "魏氏梭菌胀气病", "alias": "猝死症",
    "description": "魏氏梭菌胀气病是由产气荚膜梭菌引起的一种急性中毒病，常突然死亡。",
    "severity": "high", "is_contagious": false,
    "incubation_period": "数小时", "mortality_rate": "急性型可达100%",
    "disease_types": [
      {"name": "最急性型", "symptoms": ["腹部急剧膨大", "呼吸困难", "突然死亡", "死后腹部膨胀如鼓"]},
      {"name": "急性型", "symptoms": ["腹部膨大", "呼吸困难", "不安", "卧地不起"]}
    ],
    "characteristic_symptoms": ["腹部急剧膨大", "呼吸困难", "突然死亡", "死后腹部膨胀如鼓"],
    "differential_diagnosis": [
      {"disease": "猪丹毒", "points": "猪丹毒有疹块，胀气病无皮肤症状"},
      {"disease": "猪肺疫", "points": "猪肺疫咽喉肿胀，胀气病腹部膨大"},
      {"disease": "胃溃疡", "points": "胃溃疡有血便，胀气病无血便"}
    ],
    "prevention": "避免饲料突变，添加益生菌，减少应激。"
  }
]

module.exports = diseases

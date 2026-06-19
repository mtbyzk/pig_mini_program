// data/treatments.js - 治疗方案数据（完整版，含规格说明）
const treatments = [
  {
    "id": "t01", "disease_id": "d01", "disease_name": "猪瘟",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+氟尼辛+黄芪多糖",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧镇痛"},
          {"medication_id": "m31", "medication_name": "黄芪多糖注射液（10ml:0.2g）", "dosage_per_kg": "0.2ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗病毒增强免疫力"}
        ],
        "oral_medications": [
          {"medication_name": "板青颗粒（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，清热解毒"},
          {"medication_name": "阿莫西林粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，预防继发感染"}
        ],
        "notes": "猪瘟无特效药，以支持疗法为主。"
      },
      {
        "plan_name": "方案二：干扰素+头孢",
        "medications": [
          {"medication_id": "m34", "medication_name": "干扰素（1ml/支）", "dosage_per_kg": "1ml/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1ml，不分体重，抗病毒"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"}
        ],
        "oral_medications": [
          {"medication_name": "清瘟败毒散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，清热解毒"}
        ],
        "notes": "干扰素+头孢注射，配合清瘟败毒散拌料。"
      }
    ],
    "nursing_care": "隔离病猪，保持温暖，提供优质饮水。",
    "priority": 1
  },
  {
    "id": "t02", "disease_id": "d02", "disease_name": "非洲猪瘟",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "非洲猪瘟无疫苗无特效治疗，发现后立即上报，扑杀无害化处理。"
      },
      {
        "plan_name": "方案二：紧急防控",
        "medications": [],
        "oral_medications": [
          {"medication_name": "过硫酸氢钾（1kg/袋）", "dosage": "1:200稀释", "frequency": "每日消毒", "duration_days": 7, "notes": "1kg兑水200L，环境消毒"}
        ],
        "notes": "立即隔离，全场消毒，等待官方处理。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t03", "disease_id": "d03", "disease_name": "猪口蹄疫",
    "treatment_plans": [
      {
        "plan_name": "方案一：抗感染+对症治疗",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "4万单位/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于40kg猪，预防继发细菌感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧镇痛"}
        ],
        "oral_medications": [
          {"medication_name": "板青颗粒（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，清热解毒"}
        ],
        "notes": "口腔用0.1%高锰酸钾冲洗，蹄部用碘甘油涂抹。"
      },
      {
        "plan_name": "方案二：头孢+干扰素",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m34", "medication_name": "干扰素（1ml/支）", "dosage_per_kg": "1ml/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1ml，不分体重，抗病毒"}
        ],
        "oral_medications": [
          {"medication_name": "双黄连口服液（100ml/瓶）", "dosage": "1ml/kg体重", "frequency": "每日2次", "duration_days": 5, "notes": "每50kg猪口服50ml，清热解毒"}
        ],
        "notes": "头孢+干扰素注射，配合双黄连口服。"
      }
    ],
    "nursing_care": "保持圈舍干燥清洁，提供软质饲料和清洁饮水。",
    "priority": 1
  },
  {
    "id": "t04", "disease_id": "d04", "disease_name": "猪蓝耳病",
    "treatment_plans": [
      {
        "plan_name": "方案一：替米考星+多西环素",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m33", "medication_name": "替米考星注射液（100ml:10g）", "dosage_per_kg": "10mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每10kg猪注射1ml，控制呼吸道感染"}
        ],
        "oral_medications": [
          {"medication_name": "替米考星预混剂（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "20%含量，200g拌料200斤，控制呼吸道感染"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，控制继发感染"}
        ],
        "notes": "注射用头孢+替米考星，需分开注射。"
      },
      {
        "plan_name": "方案二：泰万菌素+黄芪多糖",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m31", "medication_name": "黄芪多糖注射液（10ml:0.2g）", "dosage_per_kg": "0.2ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，增强免疫力"}
        ],
        "oral_medications": [
          {"medication_name": "泰万菌素（5%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "5%含量，100g拌料200斤，抑制蓝耳病病毒复制"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，控制继发感染"}
        ],
        "notes": "泰万菌素对蓝耳病病毒有抑制作用。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度，减少应激。",
    "priority": 1
  },
  {
    "id": "t05", "disease_id": "d05", "disease_name": "猪圆环病毒病",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+黄芪多糖",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m31", "medication_name": "黄芪多糖注射液（10ml:0.2g）", "dosage_per_kg": "0.2ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，增强免疫力"}
        ],
        "oral_medications": [
          {"medication_name": "氟苯尼考粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，控制继发感染"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，控制继发感染"}
        ],
        "notes": "注射用头孢+黄芪多糖，需分开注射。"
      },
      {
        "plan_name": "方案二：干扰素方案",
        "medications": [
          {"medication_id": "m34", "medication_name": "干扰素（1ml/支）", "dosage_per_kg": "1ml/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1ml，不分体重，抗病毒"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"}
        ],
        "oral_medications": [
          {"medication_name": "清瘟败毒散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，清热解毒"},
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料1000斤，增强体质"}
        ],
        "notes": "干扰素+头孢注射，配合清瘟败毒散拌料。"
      }
    ],
    "nursing_care": "改善饲养环境，减少应激，提供优质饲料。",
    "priority": 2
  },
  {
    "id": "t06", "disease_id": "d06", "disease_name": "猪流行性腹泻",
    "treatment_plans": [
      {
        "plan_name": "方案一：口服补液+止泻",
        "medications": [],
        "oral_medications": [
          {"medication_name": "硫酸庆大霉素（10ml:0.2g）", "dosage": "仔猪2-3ml/头", "frequency": "每日2次", "duration_days": 3, "notes": "口服，每头仔猪2-3ml，防止细菌继发感染"},
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "仔猪3-5g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪1-2袋，止泻保护肠道"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "仔猪口服：庆大霉素+蒙脱石散+补液盐。"
      },
      {
        "plan_name": "方案二：杨树花+白头翁",
        "medications": [],
        "oral_medications": [
          {"medication_name": "杨树花口服液（100ml/瓶）", "dosage": "2-3ml/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪2-3ml，中药止泻"},
          {"medication_name": "白头翁口服液（100ml/瓶）", "dosage": "1-2ml/kg体重", "frequency": "每日2次", "duration_days": 3, "notes": "每50kg猪口服50-100ml，清热解毒，凉血止痢"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "中药止泻方案：杨树花+白头翁口服。"
      }
    ],
    "nursing_care": "保温箱30-32℃，保持干燥，及时清除粪便。",
    "priority": 1
  },
  {
    "id": "t07", "disease_id": "d07", "disease_name": "猪传染性胸膜肺炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+氟尼辛",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，主要治疗药物"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧抗炎"}
        ],
        "oral_medications": [
          {"medication_name": "氟苯尼考粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，控制呼吸道感染"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，控制继发感染"}
        ],
        "notes": "头孢+氟尼辛分开注射。"
      },
      {
        "plan_name": "方案二：替米考星方案",
        "medications": [
          {"medication_id": "m33", "medication_name": "替米考星注射液（100ml:10g）", "dosage_per_kg": "10mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每10kg猪注射1ml，控制呼吸道感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧抗炎"}
        ],
        "oral_medications": [
          {"medication_name": "替米考星预混剂（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "20%含量，200g拌料200斤，控制呼吸道感染"},
          {"medication_name": "麻杏石甘散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，止咳平喘"}
        ],
        "notes": "替米考星对胸膜肺炎放线杆菌效果极好。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度，减少应激。",
    "priority": 1
  },
  {
    "id": "t08", "disease_id": "d08", "disease_name": "猪气喘病",
    "treatment_plans": [
      {
        "plan_name": "方案一：替米考星方案",
        "medications": [
          {"medication_id": "m33", "medication_name": "替米考星注射液（100ml:10g）", "dosage_per_kg": "10mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每10kg猪注射1ml，控制支原体感染"}
        ],
        "oral_medications": [
          {"medication_name": "替米考星预混剂（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "20%含量，200g拌料200斤，控制支原体感染"},
          {"medication_name": "麻杏石甘散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "每袋拌料200斤，止咳平喘"}
        ],
        "notes": "替米考星对支原体效果好。"
      },
      {
        "plan_name": "方案二：泰妙菌素方案",
        "medications": [],
        "oral_medications": [
          {"medication_name": "泰妙菌素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，控制支原体感染"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，控制继发感染"},
          {"medication_name": "麻杏石甘散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "每袋拌料200斤，止咳平喘"}
        ],
        "notes": "泰妙菌素+多西环素拌料，配合中药止咳。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度，减少应激。",
    "priority": 2
  },
  {
    "id": "t09", "disease_id": "d09", "disease_name": "仔猪黄痢",
    "treatment_plans": [
      {
        "plan_name": "方案一：庆大霉素+蒙脱石",
        "medications": [
          {"medication_id": "m07", "medication_name": "硫酸庆大霉素（10ml:0.2g）", "dosage_per_kg": "2-3ml/头", "frequency": "每日2次", "duration_days": 3, "route": "口服", "notes": "每头仔猪2-3ml，口服，肠道杀菌"}
        ],
        "oral_medications": [
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "1-2g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪1袋，止泻保护肠道"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "仔猪口服庆大霉素+蒙脱石+补液盐。"
      },
      {
        "plan_name": "方案二：硫酸新霉素方案",
        "medications": [
          {"medication_id": "m57", "medication_name": "硫酸新霉素（10%含量）", "dosage_per_kg": "7-15mg/kg", "frequency": "每日2次", "duration_days": 3, "route": "口服", "notes": "10%含量，每kg猪口服0.07-0.15g，肠道杀菌"}
        ],
        "oral_medications": [
          {"medication_name": "杨树花口服液（100ml/瓶）", "dosage": "2-3ml/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪2-3ml，中药止泻"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "新霉素+杨树花口服，配合补液盐。"
      }
    ],
    "nursing_care": "保温箱30-32℃，保持干燥，及时清除粪便。",
    "priority": 1
  },
  {
    "id": "t10", "disease_id": "d10", "disease_name": "仔猪白痢",
    "treatment_plans": [
      {
        "plan_name": "方案一：庆大霉素+蒙脱石",
        "medications": [
          {"medication_id": "m07", "medication_name": "硫酸庆大霉素（10ml:0.2g）", "dosage_per_kg": "2-3ml/头", "frequency": "每日2次", "duration_days": 3, "route": "口服", "notes": "每头仔猪2-3ml，口服，肠道杀菌"}
        ],
        "oral_medications": [
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "1-2g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪1袋，止泻保护肠道"}
        ],
        "notes": "仔猪口服庆大霉素+蒙脱石。"
      },
      {
        "plan_name": "方案二：白头翁+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "白头翁口服液（100ml/瓶）", "dosage": "1-2ml/kg体重", "frequency": "每日2次", "duration_days": 3, "notes": "每50kg猪口服50-100ml，清热解毒，凉血止痢"},
          {"medication_name": "乳酶生（100片/瓶）", "dosage": "2-3片/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头仔猪2-3片，调节肠道菌群"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "中药止泻+益生菌+补液盐。"
      }
    ],
    "nursing_care": "加强母猪饲养管理，保持产房清洁干燥。",
    "priority": 2
  },
  {
    "id": "t11", "disease_id": "d11", "disease_name": "猪丹毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素（首选）",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "6-8万单位/kg", "frequency": "每日2-3次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于20-27kg猪，首选药物，效果极好"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧镇痛"}
        ],
        "oral_medications": [
          {"medication_name": "阿莫西林粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，巩固疗效"}
        ],
        "notes": "青霉素是猪丹毒首选药物，效果极好。"
      },
      {
        "plan_name": "方案二：头孢方案",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，广谱杀菌"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧镇痛"}
        ],
        "oral_medications": [
          {"medication_name": "阿莫西林粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，巩固疗效"}
        ],
        "notes": "头孢+氟尼辛注射，配合阿莫西林拌料。"
      }
    ],
    "nursing_care": "隔离病猪，保持圈舍清洁。",
    "priority": 1
  },
  {
    "id": "t12", "disease_id": "d12", "disease_name": "猪肺疫",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+氟尼辛",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧抗炎"}
        ],
        "oral_medications": [
          {"medication_name": "氟苯尼考粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，控制呼吸道感染"}
        ],
        "notes": "头孢+氟尼辛注射。"
      },
      {
        "plan_name": "方案二：青霉素+链霉素",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "4万单位/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于40kg猪，与链霉素联用增效"},
          {"medication_id": "m02", "medication_name": "链霉素（100万单位/支）", "dosage_per_kg": "15mg/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于67kg猪，与青霉素联用增效"}
        ],
        "oral_medications": [
          {"medication_name": "麻杏石甘散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，止咳平喘"}
        ],
        "notes": "青霉素+链霉素经典配伍，协同杀菌。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度。",
    "priority": 2
  },
  {
    "id": "t13", "disease_id": "d13", "disease_name": "猪链球菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢噻呋（首选）",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，首选药物"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧抗炎"}
        ],
        "oral_medications": [
          {"medication_name": "阿莫西林粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，巩固疗效"}
        ],
        "notes": "头孢噻呋对链球菌效果极好。"
      },
      {
        "plan_name": "方案二：青霉素+磺胺嘧啶钠",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "6万单位/kg", "frequency": "每日2-3次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于27kg猪，对链球菌效果好"},
          {"medication_id": "m97", "medication_name": "磺胺嘧啶钠（10ml:1g）", "dosage_per_kg": "0.1ml/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "每10kg猪注射1ml，脑膜炎型首选，能透过血脑屏障"}
        ],
        "oral_medications": [
          {"medication_name": "阿莫西林粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，巩固疗效"}
        ],
        "notes": "脑膜炎型：青霉素+磺胺嘧啶钠。"
      }
    ],
    "nursing_care": "隔离病猪，保持圈舍清洁，减少应激。",
    "priority": 1
  },
  {
    "id": "t14", "disease_id": "d14", "disease_name": "猪副伤寒",
    "treatment_plans": [
      {
        "plan_name": "方案一：氟苯尼考方案",
        "medications": [
          {"medication_id": "m04", "medication_name": "氟苯尼考注射液（100ml:10g）", "dosage_per_kg": "20mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每5kg猪注射1ml，对沙门氏菌效果好"}
        ],
        "oral_medications": [
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "仔猪2-3g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪1袋，止泻保护肠道"}
        ],
        "notes": "氟苯尼考注射+蒙脱石口服。"
      },
      {
        "plan_name": "方案二：恩诺沙星方案",
        "medications": [
          {"medication_id": "m03", "medication_name": "恩诺沙星注射液（100ml:5g）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每20kg猪注射1ml，对沙门氏菌效果好"}
        ],
        "oral_medications": [
          {"medication_name": "硫酸新霉素（10%含量）", "dosage": "7-15mg/kg体重", "frequency": "每日2次", "duration_days": 5, "notes": "10%含量，每kg猪口服0.07-0.15g，肠道杀菌"},
          {"medication_name": "白头翁口服液（100ml/瓶）", "dosage": "1-2ml/kg体重", "frequency": "每日2次", "duration_days": 3, "notes": "每50kg猪口服50-100ml，中药止泻"}
        ],
        "notes": "恩诺沙星注射+新霉素口服，配合白头翁。"
      }
    ],
    "nursing_care": "隔离病猪，保持圈舍清洁干燥。",
    "priority": 2
  },
  {
    "id": "t15", "disease_id": "d15", "disease_name": "猪伪狂犬病",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m31", "medication_name": "黄芪多糖注射液（10ml:0.2g）", "dosage_per_kg": "0.2ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，增强免疫力"}
        ],
        "oral_medications": [],
        "notes": "伪狂犬病无特效药，以支持疗法为主。"
      },
      {
        "plan_name": "方案二：干扰素方案",
        "medications": [
          {"medication_id": "m34", "medication_name": "干扰素（1ml/支）", "dosage_per_kg": "1ml/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1ml，不分体重，抗病毒"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"}
        ],
        "oral_medications": [
          {"medication_name": "清瘟败毒散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，清热解毒"}
        ],
        "notes": "干扰素+头孢注射，配合清瘟败毒散拌料。"
      }
    ],
    "nursing_care": "隔离病猪，保持圈舍清洁。",
    "priority": 1
  },
  {
    "id": "t16", "disease_id": "d16", "disease_name": "猪细小病毒病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "细小病毒病无特效治疗，以预防为主。母猪配种前接种疫苗。"
      },
      {
        "plan_name": "方案二：支持疗法",
        "medications": [
          {"medication_id": "m31", "medication_name": "黄芪多糖注射液（10ml:0.2g）", "dosage_per_kg": "0.2ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，增强免疫力"}
        ],
        "oral_medications": [
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料1000斤，增强体质"}
        ],
        "notes": "黄芪多糖+电解多维支持疗法。"
      }
    ],
    "nursing_care": "加强饲养管理，做好疫苗接种。",
    "priority": 2
  },
  {
    "id": "t17", "disease_id": "d17", "disease_name": "猪乙型脑炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧"}
        ],
        "oral_medications": [],
        "notes": "乙型脑炎无特效药，以支持疗法为主。灭蚊防蚊预防。"
      },
      {
        "plan_name": "方案二：中药方案",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制继发感染"}
        ],
        "oral_medications": [
          {"medication_name": "板蓝根颗粒（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，清热解毒"},
          {"medication_name": "黄芪多糖散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，增强免疫力"}
        ],
        "notes": "头孢注射+板蓝根+黄芪多糖拌料。"
      }
    ],
    "nursing_care": "灭蚊防蚊，加强饲养管理。",
    "priority": 2
  },
  {
    "id": "t18", "disease_id": "d18", "disease_name": "猪传染性胃肠炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：口服补液+止泻",
        "medications": [],
        "oral_medications": [
          {"medication_name": "硫酸庆大霉素（10ml:0.2g）", "dosage": "仔猪2-3ml/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪2-3ml，口服，防止细菌继发感染"},
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "仔猪3-5g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪1-2袋，止泻保护肠道"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "与流行性腹泻治疗相似，保温是关键。"
      },
      {
        "plan_name": "方案二：杨树花+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "杨树花口服液（100ml/瓶）", "dosage": "2-3ml/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头仔猪2-3ml，中药止泻"},
          {"medication_name": "枯草芽孢杆菌（100g/袋）", "dosage": "1g/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头仔猪1g，调节肠道菌群"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 5, "notes": "每袋兑水10L，防止脱水"}
        ],
        "notes": "中药止泻+益生菌+补液盐。"
      }
    ],
    "nursing_care": "保温箱30-32℃，保持干燥。",
    "priority": 2
  },
  {
    "id": "t19", "disease_id": "d19", "disease_name": "猪痢疾",
    "treatment_plans": [
      {
        "plan_name": "方案一：乙酰甲喹（首选）",
        "medications": [
          {"medication_id": "m37", "medication_name": "乙酰甲喹注射液（10ml:0.5g）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每20kg猪注射1ml，首选药物，对螺旋体效果好"}
        ],
        "oral_medications": [
          {"medication_name": "地美硝唑（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "20%含量，200g拌料200斤，对厌氧菌和螺旋体效果好"}
        ],
        "notes": "乙酰甲喹注射+地美硝唑拌料。"
      },
      {
        "plan_name": "方案二：泰妙菌素方案",
        "medications": [],
        "oral_medications": [
          {"medication_name": "泰妙菌素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，对螺旋体效果好"},
          {"medication_name": "地美硝唑（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "20%含量，200g拌料200斤，对厌氧菌效果好"}
        ],
        "notes": "泰妙菌素+地美硝唑拌料。"
      }
    ],
    "nursing_care": "保持圈舍清洁干燥，减少应激。",
    "priority": 2
  },
  {
    "id": "t20", "disease_id": "d20", "disease_name": "猪增生性回肠炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：泰妙菌素（首选）",
        "medications": [],
        "oral_medications": [
          {"medication_name": "泰妙菌素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，首选药物，对胞内劳森菌效果好"},
          {"medication_name": "地美硝唑（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "20%含量，200g拌料200斤，辅助治疗"}
        ],
        "notes": "泰妙菌素对回肠炎效果极好。"
      },
      {
        "plan_name": "方案二：替米考星方案",
        "medications": [],
        "oral_medications": [
          {"medication_name": "替米考星预混剂（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "20%含量，200g拌料200斤，对胞内劳森菌效果好"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，辅助治疗"}
        ],
        "notes": "替米考星+多西环素拌料。"
      }
    ],
    "nursing_care": "改善饲养管理，减少应激。",
    "priority": 2
  },
  {
    "id": "t21", "disease_id": "d21", "disease_name": "猪附红细胞体病",
    "treatment_plans": [
      {
        "plan_name": "方案一：三氮脒（首选）",
        "medications": [
          {"medication_id": "m41", "medication_name": "三氮脒（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "1g三氮脒可用于200kg猪，首选药物，对附红体效果好"},
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗应激"}
        ],
        "oral_medications": [
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，对附红体效果好"}
        ],
        "notes": "三氮脒注射+多西环素拌料。"
      },
      {
        "plan_name": "方案二：多西环素方案",
        "medications": [
          {"medication_id": "m04", "medication_name": "氟苯尼考注射液（100ml:10g）", "dosage_per_kg": "20mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每5kg猪注射1ml，对附红体效果好"}
        ],
        "oral_medications": [
          {"medication_name": "多西环素（10%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，200g拌料200斤，对附红体效果好"}
        ],
        "notes": "氟苯尼考注射+多西环素拌料。"
      }
    ],
    "nursing_care": "灭蚊驱虫，加强饲养管理。",
    "priority": 2
  },
  {
    "id": "t22", "disease_id": "d22", "disease_name": "猪弓形虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：磺胺间甲氧嘧啶（首选）",
        "medications": [
          {"medication_id": "m42", "medication_name": "磺胺间甲氧嘧啶钠（10ml:1g）", "dosage_per_kg": "0.1ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每10kg猪注射1ml，首选药物，对弓形虫效果好"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧"}
        ],
        "oral_medications": [],
        "notes": "磺胺间甲氧嘧啶对弓形虫效果极好。首次用量加倍。"
      },
      {
        "plan_name": "方案二：复方磺胺方案",
        "medications": [
          {"medication_id": "m98", "medication_name": "复方磺胺间甲氧嘧啶钠（10ml:1g）", "dosage_per_kg": "0.1ml/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每10kg猪注射1ml，复方磺胺，效果更好"}
        ],
        "oral_medications": [
          {"medication_name": "磺胺间甲氧嘧啶粉（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "10%含量，100g拌料200斤，巩固疗效"}
        ],
        "notes": "复方磺胺注射+磺胺粉拌料。"
      }
    ],
    "nursing_care": "灭鼠，禁止养猫，加强消毒。",
    "priority": 2
  },
  {
    "id": "t23", "disease_id": "d23", "disease_name": "猪蛔虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：阿苯达唑",
        "medications": [],
        "oral_medications": [
          {"medication_name": "阿苯达唑（100片/瓶）", "dosage": "5-10mg/kg体重", "frequency": "单次", "duration_days": 1, "notes": "每片0.2g，每10kg猪喂1-2片，广谱驱虫药，对蛔虫效果好"}
        ],
        "notes": "阿苯达唑口服，单次给药。定期驱虫预防。"
      },
      {
        "plan_name": "方案二：伊维菌素",
        "medications": [
          {"medication_id": "m20", "medication_name": "伊维菌素注射液（100ml:1g）", "dosage_per_kg": "0.3mg/kg", "frequency": "单次", "duration_days": 1, "route": "皮下注射", "notes": "每33kg猪注射1ml，广谱驱虫药"}
        ],
        "oral_medications": [],
        "notes": "伊维菌素皮下注射，对蛔虫效果好。"
      },
      {
        "plan_name": "方案三：阿维菌素透皮液",
        "medications": [],
        "oral_medications": [
          {"medication_name": "阿维菌素透皮液（100ml:0.5g）", "dosage": "0.1ml/kg体重", "frequency": "单次", "duration_days": 1, "notes": "每10kg猪浇泼1ml，透皮吸收，使用方便"}
        ],
        "notes": "阿维菌素透皮液浇泼，使用方便。"
      }
    ],
    "nursing_care": "定期驱虫，保持环境卫生。",
    "priority": 3
  },
  {
    "id": "t24", "disease_id": "d24", "disease_name": "猪疥螨病",
    "treatment_plans": [
      {
        "plan_name": "方案一：伊维菌素+外用",
        "medications": [
          {"medication_id": "m20", "medication_name": "伊维菌素注射液（100ml:1g）", "dosage_per_kg": "0.3mg/kg", "frequency": "间隔7-10天重复", "duration_days": 2, "route": "皮下注射", "notes": "每33kg猪注射1ml，驱螨虫"}
        ],
        "oral_medications": [],
        "notes": "伊维菌素注射+双甲脒外用，间隔7-10天重复一次。"
      },
      {
        "plan_name": "方案二：阿维菌素透皮液",
        "medications": [],
        "oral_medications": [
          {"medication_name": "阿维菌素透皮液（100ml:0.5g）", "dosage": "0.1ml/kg体重", "frequency": "间隔7-10天重复", "duration_days": 2, "notes": "每10kg猪浇泼1ml，透皮吸收，驱螨虫"}
        ],
        "notes": "阿维菌素透皮液浇泼+双甲脒外用。"
      }
    ],
    "nursing_care": "保持圈舍干燥，定期消毒。",
    "priority": 3
  },
  {
    "id": "t25", "disease_id": "d25", "disease_name": "猪缺铁性贫血",
    "treatment_plans": [
      {
        "plan_name": "方案一：右旋糖酐铁（首选）",
        "medications": [
          {"medication_id": "m18", "medication_name": "右旋糖酐铁注射液（10ml:1g）", "dosage_per_kg": "100-200mg/头", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每头仔猪1-2ml，首选药物，补铁效果好"}
        ],
        "oral_medications": [
          {"medication_name": "维生素B12（1ml:0.5mg）", "dosage": "0.1-0.3mg/头", "frequency": "每日1次", "duration_days": 3, "notes": "每头仔猪0.2-0.6ml，促进造血"}
        ],
        "notes": "仔猪出生后3天内注射右旋糖酐铁，预防贫血。"
      },
      {
        "plan_name": "方案二：口服补铁",
        "medications": [],
        "oral_medications": [
          {"medication_name": "硫酸亚铁（100g/瓶）", "dosage": "0.5-1g/头", "frequency": "每日1次", "duration_days": 7, "notes": "每头仔猪0.5-1g，口服补铁"},
          {"medication_name": "维生素C（100片/瓶）", "dosage": "0.1-0.2g/头", "frequency": "每日1次", "duration_days": 7, "notes": "每头仔猪1-2片，促进铁吸收"}
        ],
        "notes": "口服硫酸亚铁+维生素C，促进铁吸收。"
      }
    ],
    "nursing_care": "仔猪出生后3天内补铁。",
    "priority": 3
  },
  {
    "id": "t26", "disease_id": "d26", "disease_name": "猪维生素A缺乏症",
    "treatment_plans": [
      {
        "plan_name": "方案一：维生素AD",
        "medications": [
          {"medication_id": "m22", "medication_name": "维生素AD注射液（10ml）", "dosage_per_kg": "1-2ml/头", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1-2ml，补充维生素A和D"}
        ],
        "oral_medications": [
          {"medication_name": "鱼肝油（500ml/瓶）", "dosage": "5-10ml/头", "frequency": "每日1次", "duration_days": 7, "notes": "每头猪5-10ml，补充维生素A和D"}
        ],
        "notes": "维生素AD注射+鱼肝油口服。"
      },
      {
        "plan_name": "方案二：电解多维",
        "medications": [],
        "oral_medications": [
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 14, "notes": "每袋拌料1000斤，补充多种维生素"},
          {"medication_name": "青绿饲料", "dosage": "适量", "frequency": "持续", "duration_days": 14, "notes": "补充维生素A"}
        ],
        "notes": "电解多维+青绿饲料补充维生素A。"
      }
    ],
    "nursing_care": "补充青绿饲料，改善饲养管理。",
    "priority": 3
  },
  {
    "id": "t27", "disease_id": "d27", "disease_name": "猪硒缺乏症",
    "treatment_plans": [
      {
        "plan_name": "方案一：亚硒酸钠维生素E（首选）",
        "medications": [
          {"medication_id": "m23", "medication_name": "亚硒酸钠维生素E注射液（10ml）", "dosage_per_kg": "1-2ml/头", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1-2ml，首选药物，补硒和维生素E"}
        ],
        "oral_medications": [
          {"medication_name": "维生素E（100片/瓶）", "dosage": "100-200mg/头", "frequency": "每日1次", "duration_days": 7, "notes": "每头猪1-2片，辅助治疗"}
        ],
        "notes": "亚硒酸钠维生素E注射，饲料中添加亚硒酸钠预防。"
      },
      {
        "plan_name": "方案二：饲料添加",
        "medications": [],
        "oral_medications": [
          {"medication_name": "亚硒酸钠（100g/瓶）", "dosage": "0.1-0.2mg/kg饲料", "frequency": "持续", "duration_days": 14, "notes": "饲料添加补硒"},
          {"medication_name": "维生素E（100片/瓶）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 14, "notes": "补充维生素E"}
        ],
        "notes": "饲料中添加亚硒酸钠+维生素E。"
      }
    ],
    "nursing_care": "饲料中添加亚硒酸钠，补充维生素E。",
    "priority": 3
  },
  {
    "id": "t28", "disease_id": "d28", "disease_name": "猪食盐中毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {"medication_id": "m24", "medication_name": "葡萄糖注射液（500ml:25g）", "dosage_per_kg": "10-20ml/kg", "frequency": "单次", "duration_days": 1, "route": "静脉注射", "notes": "每50kg猪注射500-1000ml，补充能量"}
        ],
        "oral_medications": [
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 3, "notes": "每袋兑水10L，补充水分"}
        ],
        "notes": "立即停喂含盐饲料，少量多次给水。"
      },
      {
        "plan_name": "方案二：甘露醇降颅压",
        "medications": [
          {"medication_id": "m45", "medication_name": "甘露醇（250ml:50g）", "dosage_per_kg": "1-2g/kg", "frequency": "单次", "duration_days": 1, "route": "静脉注射", "notes": "每25-50kg猪注射250ml，降低颅内压"},
          {"medication_id": "m24", "medication_name": "葡萄糖注射液（500ml:25g）", "dosage_per_kg": "10-20ml/kg", "frequency": "单次", "duration_days": 1, "route": "静脉注射", "notes": "每50kg猪注射500-1000ml，补充能量"}
        ],
        "oral_medications": [
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 3, "notes": "每袋兑水10L，补充水分"}
        ],
        "notes": "甘露醇降低颅内压，葡萄糖补充能量。"
      }
    ],
    "nursing_care": "立即停喂含盐饲料，少量多次给水。",
    "priority": 1
  },
  {
    "id": "t29", "disease_id": "d29", "disease_name": "猪霉菌毒素中毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：脱霉+保肝",
        "medications": [
          {"medication_id": "m24", "medication_name": "葡萄糖注射液（500ml:25g）", "dosage_per_kg": "10-20ml/kg", "frequency": "每日1次", "duration_days": 3, "route": "静脉注射", "notes": "每50kg猪注射500-1000ml，保肝解毒"},
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每50kg猪注射10ml，解毒"}
        ],
        "oral_medications": [
          {"medication_name": "脱霉剂（1kg/袋）", "dosage": "2kg拌料1吨", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料500斤，吸附霉菌毒素"}
        ],
        "notes": "立即停喂霉变饲料，添加脱霉剂。"
      },
      {
        "plan_name": "方案二：中药解毒",
        "medications": [
          {"medication_id": "m24", "medication_name": "葡萄糖注射液（500ml:25g）", "dosage_per_kg": "10-20ml/kg", "frequency": "每日1次", "duration_days": 3, "route": "静脉注射", "notes": "每50kg猪注射500-1000ml，保肝解毒"}
        ],
        "oral_medications": [
          {"medication_name": "脱霉剂（1kg/袋）", "dosage": "2kg拌料1吨", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料500斤，吸附霉菌毒素"},
          {"medication_name": "龙胆泻肝散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料200斤，清肝利胆"},
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料1000斤，增强体质"}
        ],
        "notes": "脱霉剂+龙胆泻肝散+电解多维。"
      }
    ],
    "nursing_care": "立即停喂霉变饲料，改善饲料储存条件。",
    "priority": 2
  },
  {
    "id": "t30", "disease_id": "d30", "disease_name": "猪中暑",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急降温",
        "medications": [
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧"},
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗应激"}
        ],
        "oral_medications": [
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 3, "notes": "每袋兑水10L，补充水分和电解质"}
        ],
        "notes": "立即将猪转移到阴凉处，用冷水浇头和全身。"
      },
      {
        "plan_name": "方案二：中药降温",
        "medications": [
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗应激"}
        ],
        "oral_medications": [
          {"medication_name": "柴胡口服液（100ml/瓶）", "dosage": "1-2ml/kg体重", "frequency": "每日2次", "duration_days": 2, "notes": "每50kg猪口服50-100ml，中药退烧"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 3, "notes": "每袋兑水10L，补充水分和电解质"}
        ],
        "notes": "柴胡口服液退烧+补液盐补充水分。"
      }
    ],
    "nursing_care": "立即将猪转移到阴凉处，用冷水浇头和全身。",
    "priority": 1
  },
  {
    "id": "t31", "disease_id": "d31", "disease_name": "猪感冒",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧"}
        ],
        "oral_medications": [
          {"medication_name": "板蓝根颗粒（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 5, "notes": "每袋拌料200斤，清热解毒"}
        ],
        "notes": "做好保温，减少应激。"
      },
      {
        "plan_name": "方案二：中药方案",
        "medications": [],
        "oral_medications": [
          {"medication_name": "荆防败毒散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 5, "notes": "每袋拌料200斤，发汗解表，散风祛湿"},
          {"medication_name": "板蓝根颗粒（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 5, "notes": "每袋拌料200斤，清热解毒"},
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 5, "notes": "每袋拌料1000斤，增强体质"}
        ],
        "notes": "荆防败毒散+板蓝根+电解多维。"
      }
    ],
    "nursing_care": "做好保温，减少应激。",
    "priority": 3
  },
  {
    "id": "t32", "disease_id": "d32", "disease_name": "猪便秘",
    "treatment_plans": [
      {
        "plan_name": "方案一：硫酸镁通便",
        "medications": [],
        "oral_medications": [
          {"medication_name": "硫酸镁（500g/袋）", "dosage": "50-100g/头", "frequency": "单次", "duration_days": 1, "notes": "每头猪50-100g，泻下通便"},
          {"medication_name": "人工盐（500g/袋）", "dosage": "50-100g/头", "frequency": "每日1次", "duration_days": 3, "notes": "每头猪50-100g，健胃通便"}
        ],
        "notes": "硫酸镁通便，配合人工盐健胃。保证充足饮水。"
      },
      {
        "plan_name": "方案二：灌肠+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "温肥皂水", "dosage": "适量灌肠", "frequency": "每日1次", "duration_days": 2, "notes": "软化粪便"},
          {"medication_name": "乳酶生（100片/瓶）", "dosage": "5片/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪5片，调节肠道菌群"},
          {"medication_name": "枯草芽孢杆菌（100g/袋）", "dosage": "1g/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪1g，促进肠道蠕动"}
        ],
        "notes": "温肥皂水灌肠软化粪便，配合益生菌调节肠道。"
      }
    ],
    "nursing_care": "保证充足饮水，增加饲料中纤维含量。",
    "priority": 3
  },
  {
    "id": "t33", "disease_id": "d33", "disease_name": "猪胃溃疡",
    "treatment_plans": [
      {
        "plan_name": "方案一：西咪替丁+止血",
        "medications": [
          {"medication_id": "m26", "medication_name": "西咪替丁（10ml:0.2g）", "dosage_per_kg": "5-10mg/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "每10-20kg猪注射1ml，抑制胃酸分泌"},
          {"medication_id": "m87", "medication_name": "止血敏（10ml:1g）", "dosage_per_kg": "2-4ml/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪2-4ml，止血"}
        ],
        "oral_medications": [
          {"medication_name": "碳酸氢钠（500g/袋）", "dosage": "5-10g/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪5-10g，中和胃酸"},
          {"medication_name": "蒙脱石散（3g/袋）", "dosage": "5-10g/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪2-3袋，保护胃黏膜"}
        ],
        "notes": "西咪替丁抑制胃酸+止血敏止血，配合碳酸氢钠和蒙脱石。"
      },
      {
        "plan_name": "方案二：中药护胃",
        "medications": [
          {"medication_id": "m26", "medication_name": "西咪替丁（10ml:0.2g）", "dosage_per_kg": "5-10mg/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "每10-20kg猪注射1ml，抑制胃酸分泌"}
        ],
        "oral_medications": [
          {"medication_name": "碳酸氢钠（500g/袋）", "dosage": "5-10g/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪5-10g，中和胃酸"},
          {"medication_name": "白头翁口服液（100ml/瓶）", "dosage": "1-2ml/kg体重", "frequency": "每日2次", "duration_days": 5, "notes": "每50kg猪口服50-100ml，清热解毒"}
        ],
        "notes": "西咪替丁+碳酸氢钠+白头翁口服液。"
      }
    ],
    "nursing_care": "避免饲料过细，减少应激，提供易消化饲料。",
    "priority": 2
  },
  {
    "id": "t34", "disease_id": "d34", "disease_name": "猪乳房炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+鱼石脂外敷",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，消炎镇痛"}
        ],
        "oral_medications": [],
        "notes": "头孢+氟尼辛注射，鱼石脂软膏外敷消炎。"
      },
      {
        "plan_name": "方案二：氨苄西林方案",
        "medications": [
          {"medication_id": "m53", "medication_name": "氨苄西林钠（1g/支）", "dosage_per_kg": "15mg/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1g氨苄西林可用于67kg猪，控制感染"}
        ],
        "oral_medications": [],
        "notes": "氨苄西林注射+鱼石脂外敷。"
      }
    ],
    "nursing_care": "保持产房清洁，做好乳房护理。",
    "priority": 2
  },
  {
    "id": "t35", "disease_id": "d35", "disease_name": "猪子宫内膜炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+宫炎净灌注",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"}
        ],
        "oral_medications": [
          {"medication_name": "益母生化散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，活血化瘀，促进子宫复旧"}
        ],
        "notes": "头孢注射，宫炎净子宫灌注，配合益母生化散。"
      },
      {
        "plan_name": "方案二：氨苄西林+缩宫素",
        "medications": [
          {"medication_id": "m53", "medication_name": "氨苄西林钠（1g/支）", "dosage_per_kg": "15mg/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1g氨苄西林可用于67kg猪，控制感染"},
          {"medication_id": "m83", "medication_name": "缩宫素（10ml:10单位）", "dosage_per_kg": "10-30单位/头", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1-3ml，促进子宫收缩，排出恶露"}
        ],
        "oral_medications": [
          {"medication_name": "益母生化散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，活血化瘀"}
        ],
        "notes": "氨苄西林+缩宫素注射，配合益母生化散。"
      }
    ],
    "nursing_care": "做好产房消毒，产后消炎。",
    "priority": 2
  },
  {
    "id": "t36", "disease_id": "d36", "disease_name": "猪蹄裂",
    "treatment_plans": [
      {
        "plan_name": "方案一：生物素+外用",
        "medications": [],
        "oral_medications": [
          {"medication_name": "生物素（100片/瓶）", "dosage": "0.1-0.2mg/头", "frequency": "每日1次", "duration_days": 14, "notes": "每头猪1-2片，促进蹄壳修复"}
        ],
        "notes": "生物素口服促进蹄壳修复，鱼石脂外用保护蹄部。"
      },
      {
        "plan_name": "方案二：电解多维+外用",
        "medications": [],
        "oral_medications": [
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 14, "notes": "每袋拌料1000斤，补充维生素和矿物质"},
          {"medication_name": "生物素（100片/瓶）", "dosage": "0.1-0.2mg/头", "frequency": "每日1次", "duration_days": 14, "notes": "每头猪1-2片，促进蹄壳修复"}
        ],
        "notes": "电解多维+生物素补充营养，松馏油外用保护蹄部。"
      }
    ],
    "nursing_care": "保持地面干燥，补充生物素。",
    "priority": 3
  },
  {
    "id": "t37", "disease_id": "d37", "disease_name": "猪应激综合征",
    "treatment_plans": [
      {
        "plan_name": "方案一：镇静+降温",
        "medications": [
          {"medication_id": "m51", "medication_name": "氯丙嗪（10ml:0.25g）", "dosage_per_kg": "1-2mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50-100kg猪注射1ml，镇静"},
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗应激"}
        ],
        "oral_medications": [],
        "notes": "氯丙嗪镇静+维C抗应激。立即转移到安静环境。"
      },
      {
        "plan_name": "方案二：碳酸氢钠+补液",
        "medications": [
          {"medication_id": "m16", "medication_name": "维生素C（10ml:1g）", "dosage_per_kg": "20mg/kg", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每50kg猪注射10ml，抗应激"}
        ],
        "oral_medications": [
          {"medication_name": "碳酸氢钠（500g/袋）", "dosage": "5-10g/头", "frequency": "单次", "duration_days": 1, "notes": "每头猪5-10g，缓解酸中毒"},
          {"medication_name": "口服补液盐（250g/袋）", "dosage": "自由饮用", "frequency": "持续", "duration_days": 3, "notes": "每袋兑水10L，补充水分和电解质"}
        ],
        "notes": "碳酸氢钠缓解酸中毒+补液盐补充水分。"
      }
    ],
    "nursing_care": "减少应激因素，选育抗应激品种。",
    "priority": 1
  },
  {
    "id": "t38", "disease_id": "d38", "disease_name": "猪异食癖",
    "treatment_plans": [
      {
        "plan_name": "方案一：补充营养",
        "medications": [],
        "oral_medications": [
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 14, "notes": "每袋拌料1000斤，补充维生素和矿物质"}
        ],
        "notes": "补充营养，改善饲养环境，降低饲养密度。"
      },
      {
        "plan_name": "方案二：微量元素+食盐",
        "medications": [],
        "oral_medications": [
          {"medication_name": "微量元素添加剂（1kg/袋）", "dosage": "按说明使用", "frequency": "持续", "duration_days": 14, "notes": "补充微量元素"},
          {"medication_name": "食盐", "dosage": "0.3-0.5%拌料", "frequency": "持续", "duration_days": 14, "notes": "补充钠和氯"},
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 14, "notes": "每袋拌料1000斤，补充维生素"}
        ],
        "notes": "微量元素+食盐+电解多维补充营养。"
      }
    ],
    "nursing_care": "改善饲养环境，降低饲养密度，提供玩具。",
    "priority": 3
  },
  {
    "id": "t39", "disease_id": "d39", "disease_name": "猪渗出性皮炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+外用消毒",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"}
        ],
        "oral_medications": [],
        "notes": "头孢注射控制感染，聚维酮碘清洗患处。"
      },
      {
        "plan_name": "方案二：青霉素+外用",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "4万单位/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于40kg猪，控制感染"}
        ],
        "oral_medications": [],
        "notes": "青霉素注射+聚维酮碘清洗+紫药水涂抹。"
      }
    ],
    "nursing_care": "保持环境清洁，减少外伤。",
    "priority": 2
  },
  {
    "id": "t40", "disease_id": "d40", "disease_name": "猪坏死性杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+外用清创",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "6万单位/kg", "frequency": "每日2次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于27kg猪，对厌氧菌效果好"}
        ],
        "oral_medications": [],
        "notes": "青霉素注射+双氧水清创。"
      },
      {
        "plan_name": "方案二：头孢+外用",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"}
        ],
        "oral_medications": [],
        "notes": "头孢注射+双氧水清创+高锰酸钾清洗。"
      }
    ],
    "nursing_care": "减少外伤，保持环境干燥。",
    "priority": 2
  },
  {
    "id": "t41", "disease_id": "d41", "disease_name": "脱肛",
    "treatment_plans": [
      {
        "plan_name": "方案一：整复+消炎",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，预防感染"}
        ],
        "oral_medications": [],
        "notes": "高锰酸钾清洗脱出部分，整复后荷包缝合。"
      },
      {
        "plan_name": "方案二：氨苄西林+整复",
        "medications": [
          {"medication_id": "m53", "medication_name": "氨苄西林钠（1g/支）", "dosage_per_kg": "15mg/kg", "frequency": "每日2次", "duration_days": 3, "route": "肌肉注射", "notes": "1g氨苄西林可用于67kg猪，预防感染"}
        ],
        "oral_medications": [
          {"medication_name": "硫酸镁（500g/袋）", "dosage": "50-100g/头", "frequency": "单次", "duration_days": 1, "notes": "每头猪50-100g，通便，减少努责"}
        ],
        "notes": "氨苄西林预防感染+硫酸镁通便。"
      }
    ],
    "nursing_care": "避免便秘、腹泻、剧烈咳嗽。",
    "priority": 2
  },
  {
    "id": "t42", "disease_id": "d42", "disease_name": "仔猪水肿病",
    "treatment_plans": [
      {
        "plan_name": "方案一：甘露醇+地塞米松",
        "medications": [
          {"medication_id": "m10", "medication_name": "地塞米松（5ml:5mg）", "dosage_per_kg": "0.1-0.2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每25-50kg猪注射1ml，抗炎抗水肿"},
          {"medication_id": "m03", "medication_name": "恩诺沙星注射液（100ml:5g）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每20kg猪注射1ml，控制大肠杆菌"}
        ],
        "oral_medications": [],
        "notes": "地塞米松抗水肿，恩诺沙星控制大肠杆菌。"
      },
      {
        "plan_name": "方案二：甘露醇+头孢",
        "medications": [
          {"medication_id": "m45", "medication_name": "甘露醇（250ml:50g）", "dosage_per_kg": "1-2g/kg", "frequency": "单次", "duration_days": 1, "route": "静脉注射", "notes": "每25-50kg猪注射250ml，降低颅内压"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"}
        ],
        "oral_medications": [
          {"medication_name": "硫酸镁（500g/袋）", "dosage": "20-30g/头", "frequency": "单次", "duration_days": 1, "notes": "每头猪20-30g，泻下，排出毒素"}
        ],
        "notes": "甘露醇降低颅内压+头孢控制感染+硫酸镁排毒。"
      }
    ],
    "nursing_care": "断奶后逐渐换料，避免饲料突变，减少应激。",
    "priority": 1
  },
  {
    "id": "t43", "disease_id": "d43", "disease_name": "魏氏梭菌胀气病",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急排气+甲硝唑",
        "medications": [],
        "oral_medications": [
          {"medication_name": "甲硝唑（100片/瓶）", "dosage": "10-15mg/kg体重", "frequency": "每日2次", "duration_days": 3, "notes": "每片0.2g，每10kg猪喂1-2片，对厌氧菌效果好"}
        ],
        "notes": "紧急穿刺排气，甲硝唑口服。"
      },
      {
        "plan_name": "方案二：地美硝唑+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "地美硝唑（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 5, "notes": "20%含量，200g拌料200斤，对厌氧菌效果好"},
          {"medication_name": "乳酶生（100片/瓶）", "dosage": "5片/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪5片，调节肠道菌群"}
        ],
        "notes": "地美硝唑拌料+乳酶生调节肠道。"
      }
    ],
    "nursing_care": "避免饲料突变，添加益生菌，减少应激。",
    "priority": 1
  },
  {
    "id": "t44", "disease_id": "d44", "disease_name": "李氏杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+磺胺嘧啶钠",
        "medications": [
          {"medication_id": "m01", "medication_name": "青霉素钾（160万单位/支）", "dosage_per_kg": "6万单位/kg", "frequency": "每日2-3次", "duration_days": 5, "route": "肌肉注射", "notes": "1支可用于27kg猪，对李氏杆菌效果好"}
        ],
        "oral_medications": [],
        "notes": "青霉素注射，磺胺嘧啶钠能透过血脑屏障。"
      },
      {
        "plan_name": "方案二：头孢方案",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，退烧"}
        ],
        "oral_medications": [
          {"medication_name": "电解多维（500g/袋）", "dosage": "500g拌料1000斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料1000斤，增强体质"}
        ],
        "notes": "头孢+氟尼辛注射，配合电解多维。"
      }
    ],
    "nursing_care": "灭鼠，加强消毒，避免饲喂霉变饲料。",
    "priority": 2
  },
  {
    "id": "t45", "disease_id": "d45", "disease_name": "猪萎缩性鼻炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：替米考星+多西环素",
        "medications": [
          {"medication_id": "m33", "medication_name": "替米考星注射液（100ml:10g）", "dosage_per_kg": "10mg/kg", "frequency": "每48小时1次", "duration_days": 3, "route": "肌肉注射", "notes": "每10kg猪注射1ml，控制支气管败血波氏杆菌"}
        ],
        "oral_medications": [
          {"medication_name": "替米考星预混剂（20%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "20%含量，200g拌料200斤，控制感染"},
          {"medication_name": "多西环素（10%含量）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，100g拌料200斤，控制继发感染"}
        ],
        "notes": "替米考星+多西环素拌料。"
      },
      {
        "plan_name": "方案二：泰乐菌素方案",
        "medications": [
          {"medication_id": "m55", "medication_name": "泰乐菌素注射液（100ml:10g）", "dosage_per_kg": "10mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "每10kg猪注射1ml，控制感染"}
        ],
        "oral_medications": [
          {"medication_name": "泰乐菌素预混剂（10%含量）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "10%含量，200g拌料200斤，控制感染"},
          {"medication_name": "麻杏石甘散（100g/袋）", "dosage": "100g拌料200斤", "frequency": "持续", "duration_days": 10, "notes": "每袋拌料200斤，止咳平喘"}
        ],
        "notes": "泰乐菌素注射+拌料，配合中药止咳。"
      }
    ],
    "nursing_care": "改善通风，药物预防。",
    "priority": 2
  },
  {
    "id": "t46", "disease_id": "d46", "disease_name": "浅表性胃炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：健胃+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "人工盐（500g/袋）", "dosage": "50-100g/头", "frequency": "每日1次", "duration_days": 3, "notes": "每头猪50-100g，健胃通便"},
          {"medication_name": "碳酸氢钠（500g/袋）", "dosage": "5-10g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头猪5-10g，中和胃酸"},
          {"medication_name": "乳酶生（100片/瓶）", "dosage": "5片/头", "frequency": "每日2次", "duration_days": 5, "notes": "每头猪5片，调节肠道菌群"}
        ],
        "notes": "人工盐健胃+碳酸氢钠中和胃酸+乳酶生调节菌群。"
      },
      {
        "plan_name": "方案二：大蒜素+益生菌",
        "medications": [],
        "oral_medications": [
          {"medication_name": "大蒜素（100g/袋）", "dosage": "拌料50g/吨", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料2吨，促进消化"},
          {"medication_name": "枯草芽孢杆菌（100g/袋）", "dosage": "拌料100-200g/吨", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料0.5-1吨，调节肠道菌群"},
          {"medication_name": "碳酸氢钠（500g/袋）", "dosage": "5-10g/头", "frequency": "每日2次", "duration_days": 3, "notes": "每头猪5-10g，中和胃酸"}
        ],
        "notes": "大蒜素+枯草芽孢杆菌+碳酸氢钠。"
      }
    ],
    "nursing_care": "定时定量饲喂，避免饲料过冷过热。",
    "priority": 3
  },
  {
    "id": "t47", "disease_id": "d47", "disease_name": "胎衣不下",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素+抗生素",
        "medications": [
          {"medication_id": "m83", "medication_name": "缩宫素（10ml:10单位）", "dosage_per_kg": "10-30单位/头", "frequency": "每2小时1次，最多3次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1-3ml，促进子宫收缩，排出胎衣"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，预防感染"}
        ],
        "oral_medications": [
          {"medication_name": "益母生化散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，活血化瘀，促进子宫复旧"}
        ],
        "notes": "缩宫素促进子宫收缩排出胎衣，头孢预防感染。"
      },
      {
        "plan_name": "方案二：氯前列烯醇方案",
        "medications": [
          {"medication_id": "m84", "medication_name": "氯前列烯醇（2ml:0.2mg）", "dosage_per_kg": "0.1-0.2mg/头", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1ml，溶解黄体，促进子宫收缩"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，预防感染"}
        ],
        "oral_medications": [
          {"medication_name": "益母生化散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，活血化瘀"}
        ],
        "notes": "氯前列烯醇溶解黄体促进子宫收缩，头孢预防感染。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理，避免难产。",
    "priority": 2
  },
  {
    "id": "t48", "disease_id": "d48", "disease_name": "母猪无乳综合征",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素+消炎",
        "medications": [
          {"medication_id": "m83", "medication_name": "缩宫素（10ml:10单位）", "dosage_per_kg": "10-30单位/头", "frequency": "每日1-2次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1-3ml，促进泌乳"},
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，控制感染"}
        ],
        "oral_medications": [],
        "notes": "缩宫素促进泌乳，头孢消炎。"
      },
      {
        "plan_name": "方案二：苯甲酸雌二醇+缩宫素",
        "medications": [
          {"medication_id": "m85", "medication_name": "苯甲酸雌二醇（1ml:1mg）", "dosage_per_kg": "1-2mg/头", "frequency": "单次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1-2ml，促进乳腺发育"},
          {"medication_id": "m83", "medication_name": "缩宫素（10ml:10单位）", "dosage_per_kg": "10-30单位/头", "frequency": "每日1-2次", "duration_days": 3, "route": "肌肉注射", "notes": "每头猪1-3ml，促进泌乳"}
        ],
        "oral_medications": [
          {"medication_name": "王不留行（100g/袋）", "dosage": "20g/头", "frequency": "每日1次", "duration_days": 5, "notes": "每头猪20g，通乳"}
        ],
        "notes": "苯甲酸雌二醇促进乳腺发育，缩宫素促进泌乳，王不留行通乳。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理，做好产房消毒。",
    "priority": 2
  },
  {
    "id": "t49", "disease_id": "d49", "disease_name": "难产",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素助产",
        "medications": [
          {"medication_id": "m83", "medication_name": "缩宫素（10ml:10单位）", "dosage_per_kg": "10-30单位/头", "frequency": "每30分钟1次，最多3次", "duration_days": 1, "route": "肌肉注射", "notes": "每头猪1-3ml，促进子宫收缩"}
        ],
        "oral_medications": [],
        "notes": "缩宫素助产，无效则人工助产或剖腹产。"
      },
      {
        "plan_name": "方案二：人工助产+消炎",
        "medications": [
          {"medication_id": "m05", "medication_name": "头孢噻呋钠（1g/支）", "dosage_per_kg": "5mg/kg", "frequency": "每日1次", "duration_days": 5, "route": "肌肉注射", "notes": "1g头孢可用于200kg猪，预防感染"},
          {"medication_id": "m09", "medication_name": "氟尼辛葡甲胺（50ml:1.25g）", "dosage_per_kg": "2mg/kg", "frequency": "每日1次", "duration_days": 3, "route": "肌肉注射", "notes": "每50kg猪注射1ml，消炎镇痛"}
        ],
        "oral_medications": [
          {"medication_name": "益母生化散（100g/袋）", "dosage": "200g拌料200斤", "frequency": "持续", "duration_days": 7, "notes": "每袋拌料100斤，活血化瘀，促进子宫复旧"}
        ],
        "notes": "人工助产或剖腹产后，头孢+氟尼辛消炎，益母生化散促进子宫复旧。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理，避免母猪过肥或过瘦。",
    "priority": 1
  }
]

module.exports = treatments

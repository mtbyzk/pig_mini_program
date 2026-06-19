# 猪病诊断助手微信小程序

一款专业的猪病诊断工具，通过症状分析帮助养殖户快速判断猪病，并提供专业的用药方案。

## 功能特点

- 🐷 **49种常见猪病数据库**
- 🔍 **63种症状智能匹配**
- 💊 **108种药品详细信息**
- 💉 **每种疾病1-3种治疗方案**
- ⚠️ **药物配伍禁忌提醒**
- 🌙 **深色模式支持**
- 🌐 **中英文切换**

## 项目结构

```
pig_mini_program/
├── app.js                    # 应用入口
├── app.json                  # 应用配置
├── app.wxss                  # 全局样式（小红书风格）
├── project.config.json       # 项目配置
├── sitemap.json              # 站点地图
├── data/                     # 数据文件
│   ├── diseases.json         # 疾病数据
│   ├── symptoms.json         # 症状数据
│   ├── medications.json      # 药品数据
│   ├── treatments.json       # 治疗方案
│   ├── compatibilities.json  # 药物配伍
│   └── disease_symptoms.json # 疾病-症状关联
├── pages/
│   ├── index/                # 首页
│   ├── encyclopedia/         # 疾病百科
│   ├── diagnosis/            # 诊断页面
│   ├── diagnosis-result/     # 诊断结果
│   ├── treatment/            # 治疗方案
│   ├── disease-detail/       # 疾病详情
│   └── settings/             # 设置页面
└── images/                   # 图标资源（需自行添加）
```

## 使用方法

### 1. 下载微信开发者工具

访问 [微信开发者工具下载页面](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 下载并安装。

### 2. 导入项目

1. 打开微信开发者工具
2. 选择「导入项目」
3. 选择本项目文件夹
4. 填写 AppID（或使用测试号）
5. 点击「导入」

### 3. 添加图标

在 `images` 文件夹中添加以下图标文件：

- home.png / home-active.png
- book.png / book-active.png
- settings.png / settings-active.png
- search.png
- warning.png
- arrow-right.png
- medical.png
- biotech.png
- vaccines.png
- science.png
- analytics.png
- hospital.png
- grid.png
- info.png
- sync.png
- download.png
- clean.png
- coronavirus.png
- sick.png
- medication.png
- agreement.png
- privacy.png
- feedback.png
- star.png
- person.png
- pets.png
- dark-mode.png
- language.png
- notification.png
- swap.png
- water.png
- healing.png
- heart.png
- thermometer.png
- air.png
- brain.png
- baby.png
- other.png
- search-off.png

### 4. 预览

点击微信开发者工具中的「预览」按钮，即可在手机上查看效果。

## 开发信息

- **开发者**：WangXin
- **版本**：v1.0.0
- **框架**：微信小程序原生框架
- **风格**：小红书风格

## 数据统计

- 疾病种类：49种
- 症状数量：63种
- 药品数量：108种
- 治疗方案：每种疾病1-3种

## 注意事项

1. 本应用提供的信息仅供参考，不能替代专业兽医诊断
2. 使用本应用时，请结合实际情况判断，必要时请咨询专业兽医
3. 本应用中的用药方案仅供参考，具体用药请遵循兽医指导

## 许可证

MIT License

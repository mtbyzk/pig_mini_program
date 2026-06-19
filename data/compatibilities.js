// data/compatibilities.js - 药物配伍数据
const compatibilities = [
  {"id": "comp01", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m02", "drug_b_name": "链霉素", "compatibility": "compatible", "notes": "经典配伍！同注射器混合，协同杀菌。"},
  {"id": "comp02", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m05", "drug_b_name": "头孢噻呋", "compatibility": "compatible", "notes": "同属β-内酰胺类，可同注射器混合使用。"},
  {"id": "comp03", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m04", "drug_b_name": "氟苯尼考", "compatibility": "incompatible", "notes": "禁止同注射器混合！青霉素是杀菌剂，氟苯尼考是抑菌剂。"},
  {"id": "comp04", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m33", "drug_b_name": "替米考星", "compatibility": "incompatible", "notes": "禁止同注射器混合！替米考星是抑菌剂。"},
  {"id": "comp05", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m16", "drug_b_name": "维生素C", "compatibility": "incompatible", "notes": "禁止同注射器混合！维生素C会使青霉素分解失效。"},
  {"id": "comp06", "drug_a_id": "m01", "drug_a_name": "青霉素钾/钠", "drug_b_id": "m09", "drug_b_name": "氟尼辛葡甲胺", "compatibility": "compatible", "notes": "可以同注射器混合，退烧药与抗生素联合使用疗效更好。"},
  {"id": "comp07", "drug_a_id": "m05", "drug_a_name": "头孢噻呋", "drug_b_id": "m09", "drug_b_name": "氟尼辛葡甲胺", "compatibility": "compatible", "notes": "可以同注射器混合。"},
  {"id": "comp08", "drug_a_id": "m05", "drug_a_name": "头孢噻呋", "drug_b_id": "m33", "drug_b_name": "替米考星", "compatibility": "incompatible", "notes": "禁止同注射器混合！头孢是杀菌剂，替米考星是抑菌剂。"},
  {"id": "comp09", "drug_a_id": "m05", "drug_a_name": "头孢噻呋", "drug_b_id": "m04", "drug_b_name": "氟苯尼考", "compatibility": "incompatible", "notes": "禁止同注射器混合！头孢是杀菌剂，氟苯尼考是抑菌剂。"},
  {"id": "comp10", "drug_a_id": "m33", "drug_a_name": "替米考星", "drug_b_id": "m04", "drug_b_name": "氟苯尼考", "compatibility": "compatible", "notes": "都是抑菌剂，可以联用。"},
  {"id": "comp11", "drug_a_id": "m33", "drug_a_name": "替米考星", "drug_b_id": "m39", "drug_b_name": "多西环素", "compatibility": "compatible", "notes": "都是抑菌剂，可以联用。"},
  {"id": "comp12", "drug_a_id": "m04", "drug_a_name": "氟苯尼考", "drug_b_id": "m39", "drug_b_name": "多西环素", "compatibility": "compatible", "notes": "都是抑菌剂，可以联用。"}
]

module.exports = compatibilities

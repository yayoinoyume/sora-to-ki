// 關於頁（about/AboutFall）落地之後往地底挖的那幾層：手上的東西、做過的事。
// 成長軌跡（下墜時經過的那幾年）在 journeyData。

/** 地表：一路帶著的東西，分領域；領域的名字在 locale 的 aboutFall.skill.* */
export const SKILL_GROUPS: { key: string; items: string[] }[] = [];

/** 第一層：做過的事。期間不分語系，公司與職稱分語系（順序跟 WORK_PERIODS 一樣） */
export const WORK_PERIODS: string[] = [];

export const WORK_BY_LANG: Record<string, { title: string; role: string }[]> = {
  'zh-TW': [],
  'zh-CN': [],
  en: [],
  ja: [],
  ko: [],
};


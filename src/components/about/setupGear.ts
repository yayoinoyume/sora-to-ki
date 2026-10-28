// 設備清單的資料。產品名與規格是原文（型號不翻譯），用途說明走翻譯檔的 setup.roles.*。
// 圖紙上畫在哪裡在 setupSheets；零件線稿是 public/illustrations/setup/<id>.webp（暖白透明底）。

type CategoryId = 'main-rig' | 'server' | 'network' | 'smart-home' | 'peripherals';

export interface GearItem {
  /** 也是零件線稿的檔名 */
  id: string;
  name: string;
  spec: string;
  /** setup.roles.<roleKey>：一句話用途，只有「為什麼有它」不明顯的才寫 */
  roleKey?: string;
}

export interface GearCategory {
  id: CategoryId;
  /** 分類的英文名，跟書櫃、音樂頁的英文小標同一套語氣 */
  name: string;
  items: GearItem[];
}

export const GEAR: GearCategory[] = [
  { id: 'main-rig', name: 'The Main Rig', items: [] },
  { id: 'server', name: 'The Server', items: [] },
  { id: 'network', name: 'The Network', items: [] },
  { id: 'smart-home', name: 'Smart Home', items: [] },
  { id: 'peripherals', name: 'Peripherals', items: [] },
];

/** 老家那台：零件拼起來的備用機，只列規格不放圖 */
export const BASE_II_SPECS: { label: string; value: string }[] = [];

/**
 * 其他連網家電：智慧家庭的一部分，但不是「挑過的設備」，所以只列名字與類型、不放產品圖。
 * 類型走 setup.appliances.types.*。
 */
export const APPLIANCES: { name: string; typeKey: string }[] = [];

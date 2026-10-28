interface YearLabel {
  NOW: string;
  FUTURE: string;
}
interface MilestoneStatic {
  id: number;
  year: string;
  icon: string;
  color: string;
  tags: string[];
}
interface MilestoneLang {
  title: string;
  subtitle: string;
  description: string;
  extraTags: string[];
}

// 成長軌跡資料 — 從舊 /journey 頁搬過來（頁面已汰汰、併入 /about）。
// icon/color/tags 穩定；title/subtitle/description 隨語系。

const YEAR_LABELS: Record<string, YearLabel> = {
  'zh-TW': { NOW: '現在', FUTURE: '未來' },
  'zh-CN': { NOW: '现在', FUTURE: '未来' },
  en: { NOW: 'Now', FUTURE: 'Future' },
  ja: { NOW: '今', FUTURE: '未来' },
  ko: { NOW: '지금', FUTURE: '미래' },
};

const MILESTONE_STATIC: MilestoneStatic[] = [];

// 每語系的標題／描述。模板預設是空的：這些是站長自己的成長軌跡，
// 換掉站台的人要自己填（不填就顯示空狀態，不是沿用別人的生平）。
const MILESTONES_BY_LANG: Record<string, MilestoneLang[]> = {
  'zh-TW': [],
  'zh-CN': [],
  en: [],
  ja: [],
  ko: [],
};

const MILESTONE_BEATS_BY_LANG: Record<string, string[][]> = {
  'zh-TW': [],
  'zh-CN': [],
  en: [],
  ja: [],
  ko: [],
};

export { YEAR_LABELS, MILESTONE_STATIC, MILESTONES_BY_LANG, MILESTONE_BEATS_BY_LANG };

// 作品頁（about/Works）的清單與數據。
//
// 清單的順序就是螺旋的順序（第一個是中心的起點，越後面越外圈），要跟後端的 WORK_REPOS 一致。
// 每一件長什麼樣子全由 GitHub 的數據決定（語言組成、commit 數、星數、最後推送時間），
// 這裡只放數據給不了的：顯示的名字、一句介紹。
import { queryOptions } from '@tanstack/react-query';
import type { WorkRepo, WorksResponse } from '@koimsurai/api-types';
import { apiUrl } from '@/lib/api';

export interface WorkEntry {
  repo: string;
  name: string;
  /** 一句話：這是什麼 */
  what: Record<string, string>;
  /** 螺旋的起點 */
  origin?: boolean;
  /**
   * 後端還沒拿到數據時用的值（2026-10-23 從 GitHub 量的）：私有 repo 在 token 沒權限時、
   * 或後端還沒更新到有這支端點的版本時，作品照樣畫得出來
   */
  fallback: Omit<WorkRepo, 'repo'>;
}

export const WORKS: WorkEntry[] = [];

/** `/api/github/works`：抓不到就是空的，作品頁改用 fallback */
export const worksQueryOptions = queryOptions({
  queryKey: ['github', 'works'],
  queryFn: async (): Promise<WorkRepo[]> => {
    const res = await fetch(apiUrl('/api/github/works'));
    if (!res.ok) return [];
    const data = (await res.json()) as WorksResponse;
    return data.works;
  },
  staleTime: 60 * 60 * 1000,
});

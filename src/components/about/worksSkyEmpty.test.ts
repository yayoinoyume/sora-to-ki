// 作品清單清空後（模板預設就是空的）這條螺旋不能有任何一條路徑拋錯：
// 換頁時 Works 的 leave() 會直接呼叫 moonOf(newest) 收終點，
// 一旦拋錯就沒有 catch，pushState 不會執行 —— 從 /portfolio 點任何連結都出不去。
import { describe, expect, it } from 'vite-plus/test';
import { bodiesOf, createSpiral } from './worksSky';

describe('一件作品都沒有', () => {
  const spiral = createSpiral(bodiesOf([]));

  it('newest 是 -1，但每個對外的方法都還能呼叫', () => {
    expect(spiral.newest).toBe(-1);
    expect(spiral.positions(800, 600, 0)).toEqual([]);
    expect(spiral.tangent(800, 600, 0, spiral.tLast)).toSatisfy(
      (v: { x: number; y: number }) => Number.isFinite(v.x) && Number.isFinite(v.y),
    );
    expect(spiral.point(800, 600, 0, 0).every(Number.isFinite)).toBe(true);
  });

  it('moonOf(-1) 回螺旋上的點，不是拋錯', () => {
    const [x, y] = spiral.moonOf(spiral.newest, 800, 600, 0);
    expect([x, y].every(Number.isFinite)).toBe(true);
  });
});

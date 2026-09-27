/** Illustrative forest-plot data and maths (CLAUDE.md §5). Not real data. */

export interface Study {
  label: string;
  effect: number;
  weight: number;
}

export const STUDIES: Study[] = [
  { label: 'A', effect: 0, weight: 1 },
  { label: 'B', effect: 0, weight: 1 },
  { label: 'C', effect: 0, weight: 1 },
  { label: 'D', effect: 1, weight: 7 },
];

/** x-axis domain in effect units. */
export const DOMAIN: [number, number] = [-0.3, 1.3];

/** Fixed-effect pooled estimate: weighted mean of included studies, or null if none. */
export function pooledEffect(included: boolean[]): number | null {
  let w = 0;
  let wx = 0;
  STUDIES.forEach((s, i) => {
    if (!included[i]) return;
    w += s.weight;
    wx += s.weight * s.effect;
  });
  return w === 0 ? null : wx / w;
}

/** Position of an effect value as a percentage of the plot width. */
export function xPercent(effect: number): number {
  const [lo, hi] = DOMAIN;
  return Math.round(((effect - lo) / (hi - lo)) * 100 * 1000) / 1000;
}

/** Square side in px, so that area is proportional to weight. */
export function squareSide(weight: number): number {
  return Math.round(10 * Math.sqrt(weight) * 10) / 10;
}

export function fmt(n: number, digits = 2): string {
  // Avoid "-0.00"
  const v = Math.abs(n) < 0.005 ? 0 : n;
  return v.toFixed(digits);
}

export function readout(included: boolean[]): string {
  const n = included.filter(Boolean).length;
  const recall = Math.round((n / STUDIES.length) * 100);
  const pooled = pooledEffect(included);
  const found = `${n} of ${STUDIES.length} ${STUDIES.length === 1 ? 'study' : 'studies'} found (${recall}% recall).`;
  return pooled === null ? `${found} No pooled estimate.` : `${found} Pooled effect ${fmt(pooled)}.`;
}

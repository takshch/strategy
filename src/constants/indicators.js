export const INDICATORS_NAME = [
  'EMA Crossover',
  'SMA Crossover',
  'MACD Crossover',
  'MACD Zero Line Crossover',
  'RSI',
  'SuperTrend',
];

export const INDICATORS = [
  { id: 0, text: INDICATORS_NAME[0] },
  { id: 1, text: INDICATORS_NAME[1] },
  { id: 2, text: INDICATORS_NAME[2] },
  { id: 3, text: INDICATORS_NAME[3] },
  { id: 4, text: INDICATORS_NAME[4] },
  { id: 5, text: INDICATORS_NAME[4] },
];

export const PARAMETERS = [
  [
    { label: 'fast' },
    { label: 'slow' },
  ],
  [
    { label: 'fast' },
    { label: 'slow' },
  ],
  [
    { label: 'fast' },
    { label: 'slow' },
    { label: 'smoothline' },
  ],
  [
    { label: 'fast' },
    { label: 'slow' },
    { label: 'smoothline' },
  ],
  [
    { label: 'period' },
  ],
  [
    { label: 'period' },
    { label: 'multiplier' },
  ],
];

export const DEFAULT_PARAMETERS = [
  { fast: 0, slow: 0 },
  { fast: 0, slow: 0 },
  { fast: 0, slow: 0, smoothline: 0 },
  { fast: 0, slow: 0, smoothline: 0 },
  { period: 0 },
  { period: 0, multiplier: 0 }
];
export const OPTIONS = [
  { id: '1', text: 'EMA Crossover' },
  { id: '2', text: 'SMA Crossover' },
  { id: '3', text: 'MACD Crossover' },
  { id: '4', text: 'MACD Zero Line Crossover' },
  { id: '5', text: 'RSI' },
  { id: '6', text: 'SuperTrend' },
];

export const SETTINGS = [
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

export const DEFAULT_SETTINGS = [
  { fast: 0, slow: 0 },
  { fast: 0, slow: 0 },
  { fast: 0, slow: 0, smoothline: 0 },
  { fast: 0, slow: 0, smoothline: 0 },
  { period: 0 },
  { period: 0, multiplier: 0 }
];
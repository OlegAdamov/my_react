import Value from 'components/Counter/Value';

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  // spacing: 4,
  spacing: value => `${4 * value}px`,
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    dashed: '2px dashed',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};

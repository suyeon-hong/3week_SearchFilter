const colors = {
  primary: '#191F28',
  gray: '#8B95A1',
};

const borderRadius = {
  small: 4,
  medium: 8,
  large: 16,
  xlarge: 20,
  xxlarge: 24,
};

const gap = {
  smallVertical: 14,
  smallHorizontal: 18,
  baseVertical: 14,
  baseHorizontal: 18,
  largeVertical: 18,
  largeHorizontal: 28,
};

const theme = {
  colors,
  borderRadius,
  gap,
};

export type Theme = typeof theme;
export default theme;

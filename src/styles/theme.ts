const colors = {
  primary: '#555555',
  gray: '#AAA9A9',
  header: '#629AFF',
  blue: '#3182F6',
  hover: 'rgba(0, 23, 51, 0.05)',
  focus: 'rgba(0, 23, 51, 0.10)',
  active: 'rgba(0, 23, 51, 0.20)',
  background: '#f2f2f2',
  boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.1)',
  tag: '#EEEEEE',
};

const borderRadius = {
  small: 4,
  medium: 10,
};

const device = {
  mobile: `(max-width: 768px)`,
  desktop: `(max-width: 1440px)`,
};

const gaps = {
  base: 10,
  lgVertical: 18,
};

const sizes = {
  smHeader: 50,
  lgHeader: 60,
  lgItem: 70,
};

const theme = {
  colors,
  borderRadius,
  gaps,
  sizes,
  device,
};

export type Theme = typeof theme;
export default theme;

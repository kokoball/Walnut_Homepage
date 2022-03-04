const colors = {
  primary: '#FFB100',
  text: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F9F9F9',
};

const fontSize = {
  thin: '400',
  normal: '500',
  thick: '700',
};

const size = {
  buttonWidth: 76,
  buttonHeight: 32,
  borderRadius: 4,
};

const device = {
  mobile: `(max-width: 768px)`,
  desktop: `(max-width: 1440px)`,
};

const gap = {
  base: 4,
};

const theme = {
  colors,
  fontSize,
  size,
  gap,
  device,
};

export type Theme = typeof theme;
export default theme;

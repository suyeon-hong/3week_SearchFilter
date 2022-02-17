import { css } from 'styled-components';

type Weight = 400 | 500 | 600 | 700;

export const font10 = (weight: Weight) => css`
  font-size: 10px;
  line-height: 1.125;
  font-weight: ${weight};
`;

export const font12 = (weight: Weight) => css`
  font-size: 12px;
  line-height: 1.125;
  font-weight: ${weight};
`;

export const font14 = (weight: Weight) => css`
  font-size: 14px;
  line-height: 1.4285714286;
  font-weight: ${weight};
`;

export const font16 = (weight: Weight) => css`
  font-size: 16px;
  line-height: 1.125;
  font-weight: ${weight};
`;

export const font18 = (weight: Weight) => css`
  font-size: 18px;
  line-height: 1.3333333333;
  font-weight: ${weight};
`;

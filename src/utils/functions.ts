import { IMockData } from '@types';

export const matchName = (name: string, keyword: string): boolean => {
  if (keyword === '') return false;
  return name.toLowerCase().indexOf(keyword) > -1;
};

export const matchBrand = (
  brand: string | null | undefined,
  keyword: string
): boolean | undefined => {
  if (keyword === '') return false;
  return (brand?.toLowerCase().indexOf(keyword) as number) > -1;
};

export const resultFilter = (
  data: IMockData[],
  name: string,
  value: string
) => {
  return data.filter((item) =>
    name === '제품명'
      ? matchName(item.제품명, value)
      : matchBrand(item.브랜드, value)
  );
};

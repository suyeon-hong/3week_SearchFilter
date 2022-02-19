import { IMockData } from '@types';

export const matchName = (
  name: string | null | undefined,
  keyword: string
): boolean => {
  const keyLen = keyword.length;
  name = name?.toLowerCase().substring(0, keyLen);
  if (keyword === '') return false;
  return name === keyword.toString().toLowerCase();
};

export const matchBrand = (
  brand: string | null | undefined,
  keyword: string
): boolean => {
  const keyLen = keyword.length;
  brand = brand?.toLowerCase().substring(0, keyLen);
  if (brand === '') return false;
  return brand === keyword.toString().toLowerCase();
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

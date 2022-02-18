// @NOTE: 검색해야할 문자열을 키워드와 비교하여 매칭이 되는지 체크
export const matchName = (name: string, keyword: string): boolean => {
  const keyLen = keyword.length;
  name = name.toLowerCase().substring(0, keyLen);
  if (keyword === '') return false;
  return name === keyword.toString().toLowerCase();
};

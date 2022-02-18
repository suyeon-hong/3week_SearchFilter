import { Input } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
import { EmptyBox } from '@components/base';
import { matchName } from '@utils/functions';
import { IMockData } from '@types';
import React, { useEffect, useState } from 'react';
import * as S from './Style';

interface MainProps {
  data?: IMockData[];
}

const data = [
  { 제품명: '6년근고려홍삼정스틱', 브랜드: '배달의민족' },
  { 제품명: '마그네슘정', 브랜드: '요기요' },
  { 제품명: '비타민D 1000IU', 브랜드: '뱅크샐러드' },
  { 제품명: '비타민D 1000IU VitaminD 1000IU', 브랜드: '위코드' },
  { 제품명: '비타민D 1000IU 츄어블', 브랜드: '배달의민족' },
  { 제품명: '비타민D 1000Q연질캡슐', 브랜드: 'SKT' },
  { 제품명: '비타민D 1080 IU', 브랜드: '카카오페이' },
  { 제품명: '비타민D 1099IU', 브랜드: '위코드' },
  { 제품명: '비타민D 2000', 브랜드: '카카오톡' },
  { 제품명: '비타민D 2000 I.U', 브랜드: '배달의민족' },
  { 제품명: '비타민D 2000 IU', 브랜드: '다이소' },
];
export interface updateFieldProps {
  field: string;
  value: string;
  update: boolean;
}

export interface stateProps {
  results: resultsProps[];
}
export interface resultsProps {
  제품명: string | null;
  브랜드: string;
}

const Main = () => {
  const [checkedBrand, setCheckedBrand] = useState('');
  const [userInput, setUserInput] = useState('');
  const [results, setResult] = useState<stateProps | never[] | any>([]);

  console.log('checkedBrand: ', checkedBrand, 'userInput: ', userInput);

  useEffect(() => {
    const results = data.filter(
      (item) => true === matchName(item.제품명, userInput)
    );
    setResult({ results });
  }, [userInput]);

  console.log(results.results, '결과');

  return (
    <S.PageWrapper>
      <Input setUserInput={setUserInput} />

      <TagList supplementInfo={data} setCheckedBrand={setCheckedBrand} />
      <MainBox items={results.results} />
      <PaginationWrapper list={data} />
    </S.PageWrapper>
  );
};

export default Main;

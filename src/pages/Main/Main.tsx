import { EmptyBox, Input } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
import { matchName, matchBrand } from '@utils/functions';
import { IMockData } from '@types';
import React, { useEffect, useState } from 'react';
import * as S from './Style';

interface MainProps {
  data: IMockData[];
}

export interface updateFieldProps {
  field: string;
  value: string;
  update: boolean;
}

export interface stateProps {
  results: resultsProps;
}
export interface resultsProps {
  제품명: string | null;
  브랜드: string;
}

const Main = ({ data }: MainProps) => {
  const [checkedBrand, setCheckedBrand] = useState('');
  const [userInput, setUserInput] = useState('');
  const [filteredList, setFilteredList] = useState<IMockData[]>([]);
  const [temporaryList, setTemporaryList] = useState<IMockData[]>([]);

  // console.log('checkedBrand: ', checkedBrand, 'userInput: ', userInput);

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  useEffect(() => {
    const results: IMockData[] = data.filter(
      (item) => true === matchName(item.제품명, userInput)
    );
    results && setFilteredList(results);
  }, [userInput]);

  useEffect(() => {
    const results: IMockData[] = filteredList.filter(
      (item) => true === matchBrand(item.브랜드, checkedBrand)
    );
    setTemporaryList(filteredList);
    results && setFilteredList(results);
  }, [checkedBrand]);

  return (
    <S.PageWrapper>
      <Input setUserInput={setUserInput} />
      <TagList supplementInfo={data} setCheckedBrand={setCheckedBrand} />

      {filteredList.length > 0 ? (
        <>
          <MainBox items={filteredList} />
          <PaginationWrapper list={filteredList} />
        </>
      ) : (
        <EmptyBox />
      )}
    </S.PageWrapper>
  );
};

export default Main;

import { EmptyBox, Input } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
<<<<<<< HEAD
import { matchName, matchBrand } from '@utils/functions';
import { IMockData } from '@types';
import React, { useEffect, useState } from 'react';
=======
import { matchName } from '@utils/functions';
import { IMockData } from '@types';
import { useEffect, useState } from 'react';
>>>>>>> b63f2b628b5389e5d432598855b3b5bfd99bd2c7
import * as S from './Style';

interface MainProps {
  data: IMockData[];
}

export interface updateFieldProps {
  field: string;
  value: string;
  update: boolean;
}

<<<<<<< HEAD
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
=======
const Main = ({ data }: MainProps) => {
  const [checkedBrand, setCheckedBrand] = useState('');
  const [userInput, setUserInput] = useState('');
  const [filteredList, setFilteredList] = useState<IMockData[]>(data);
>>>>>>> b63f2b628b5389e5d432598855b3b5bfd99bd2c7

  // console.log('checkedBrand: ', checkedBrand, 'userInput: ', userInput);

  useEffect(() => {
<<<<<<< HEAD
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

=======
    const results: IMockData[] = data.filter(
      (item) => true === matchName(item.제품명, userInput)
    );
    results.length > 0 ? setFilteredList(results) : setFilteredList(data);
  }, [userInput]);

>>>>>>> b63f2b628b5389e5d432598855b3b5bfd99bd2c7
  return (
    <S.PageWrapper>
      <Input setUserInput={setUserInput} />
      <TagList supplementInfo={data} setCheckedBrand={setCheckedBrand} />
<<<<<<< HEAD

      {filteredList.length > 0 ? (
        <>
          <MainBox items={filteredList} />
          <PaginationWrapper list={filteredList} />
        </>
      ) : (
        <EmptyBox />
      )}
=======
      <MainBox items={filteredList} />
      <PaginationWrapper list={filteredList} />
>>>>>>> b63f2b628b5389e5d432598855b3b5bfd99bd2c7
    </S.PageWrapper>
  );
};

export default Main;

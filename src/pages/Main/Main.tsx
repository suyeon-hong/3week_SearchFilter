import { Input } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
import { matchName } from '@utils/functions';
import { IMockData } from '@types';
import { useEffect, useState } from 'react';
import * as S from './Style';

interface MainProps {
  data: IMockData[];
}

export interface updateFieldProps {
  field: string;
  value: string;
  update: boolean;
}

const Main = ({ data }: MainProps) => {
  const [checkedBrand, setCheckedBrand] = useState('');
  const [userInput, setUserInput] = useState('');
  const [filteredList, setFilteredList] = useState<IMockData[]>(data);

  console.log('checkedBrand: ', checkedBrand, 'userInput: ', userInput);

  useEffect(() => {
    const results: IMockData[] = data.filter(
      (item) => true === matchName(item.제품명, userInput)
    );
    results.length > 0 ? setFilteredList(results) : setFilteredList(data);
  }, [userInput]);

  return (
    <S.PageWrapper>
      <Input setUserInput={setUserInput} />

      <TagList supplementInfo={data} setCheckedBrand={setCheckedBrand} />
      <MainBox items={filteredList} />
      <PaginationWrapper list={filteredList} />
    </S.PageWrapper>
  );
};

export default Main;

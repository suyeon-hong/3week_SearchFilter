import { Input } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
import { IMockData } from '@types';
import { useState } from 'react';
import * as S from './Style';

interface MainProps {
  data?: IMockData[];
}

const Main = ({ data }: MainProps) => {
  const [checkedBrand, setCheckedBrand] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');

  console.log('checkedBrand: ', checkedBrand, 'userInput: ', userInput);

  return (
    <S.PageWrapper>
      <Input setUserInput={setUserInput} />
      <TagList supplementInfo={data} setCheckedBrand={setCheckedBrand} />
      <MainBox items={data} />
      <PaginationWrapper list={data} />
    </S.PageWrapper>
  );
};

export default Main;

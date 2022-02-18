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

  useEffect(() => {
    setFilteredList(data);

    if (userInput.length > 0) {
      const titleResult: IMockData[] = data.filter(
        (item) => true === matchName(item.제품명, userInput)
      );
      const brandResult: IMockData[] = data.filter(
        (item) => item.브랜드 && true === matchName(item.브랜드, userInput)
      );

      if (titleResult.length > 0 || brandResult.length > 0) {
        setFilteredList([...titleResult, ...brandResult]);
      } else {
        setFilteredList(data);
      }
    }

    if (checkedBrand.length > 0) {
      const brandResult: IMockData[] = data.filter(
        (item) => item.브랜드 && true === matchName(item.브랜드, checkedBrand)
      );

      if (userInput.length > 0) {
        const titleResult: IMockData[] = brandResult.filter(
          (item) => true === matchName(item.제품명, userInput)
        );
        if (titleResult.length > 0) {
          setFilteredList([...titleResult]);
        } else {
          setFilteredList(brandResult);
        }
      }
    }
  }, [userInput, checkedBrand, data]);

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

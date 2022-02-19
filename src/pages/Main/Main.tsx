import { EmptyBox, Input, ItemBrandBtn } from '@components/base';
import { PaginationWrapper, TagList, MainBox } from '@components/domain';
import { resultFilter } from '@utils/functions';
import { IMockData } from '@types';
import { useEffect, useState } from 'react';
import * as S from './Style';

interface MainProps {
  data: IMockData[];
}

const Main = ({ data }: MainProps) => {
  const [userInput, setUserInput] = useState('');
  const [userSelect, setUserSelect] = useState<boolean>(true);
  const [checkedBrand, setCheckedBrand] = useState('');
  const [temporaryBrand, setTemporaryBrand] = useState('');
  const [filteredList, setFilteredList] = useState<IMockData[]>([]);
  const [temporaryList, setTemporaryList] = useState<IMockData[]>([]);

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  useEffect(() => {
    const results: IMockData[] = userSelect
      ? resultFilter(data, '제품명', userInput)
      : resultFilter(data, '브랜드', userInput);
    results && setFilteredList(results);
  }, [userInput]);

  useEffect(() => {
    if (temporaryBrand !== '') {
      const results: IMockData[] = resultFilter(
        temporaryList,
        '브랜드',
        checkedBrand
      );
      results && setFilteredList(results);
    } else {
      const results: IMockData[] = resultFilter(
        filteredList,
        '브랜드',
        checkedBrand
      );

      if (results) {
        setTemporaryBrand(checkedBrand);
        setTemporaryList(filteredList);
        setFilteredList(results);
      }
    }
  }, [checkedBrand]);

  return (
    <S.PageWrapper>
      <S.InputWrapper>
        <ItemBrandBtn userSelect={userSelect} setUserSelect={setUserSelect} />
        <Input setUserInput={setUserInput} />
        <div className="blank">리셋버튼 추가할 자리</div>
      </S.InputWrapper>
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

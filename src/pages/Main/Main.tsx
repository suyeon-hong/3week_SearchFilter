import {
  PaginationWrapper,
  TagList,
  MainBox,
  Header,
} from '@components/domain';
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
  const [currentId, setCurrentId] = useState<string>('');

  const initFilteredList = () => {
    setFilteredList(data);
  };

  useEffect(() => {
    initFilteredList();
  }, [data]);

  useEffect(() => {
    if (!userInput) {
      initFilteredList();
      return;
    }

    const results: IMockData[] = userSelect
      ? resultFilter(data, '제품명', userInput)
      : resultFilter(data, '브랜드', userInput);
    results && setFilteredList(results);
  }, [userInput]);

  useEffect(() => {
    if (!checkedBrand) {
      initFilteredList();
      return;
    }

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
      <Header
        userSelect={userSelect}
        userInput={userInput}
        setUserInput={setUserInput}
        setUserSelect={setUserSelect}
        initFilteredList={initFilteredList}
        setCurrentId={setCurrentId}
      />
      <TagList
        setUserInput={setUserInput}
        supplementInfo={data}
        setCheckedBrand={setCheckedBrand}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <MainBox items={filteredList} />
      <PaginationWrapper list={filteredList} />
    </S.PageWrapper>
  );
};

export default Main;

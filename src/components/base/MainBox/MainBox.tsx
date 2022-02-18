import React from 'react';
import { Header, ItemBox, EmptyBox } from '@components/base';
import * as S from './Style';
import { Item } from '@types';

interface MainBoxProps {
  items?: Item[];
}

const MainBox = ({ items }: MainBoxProps) => {
  return (
    <S.MainBoxWrapper>
      <Header />
      {items ? (
        React.Children.toArray(
          items.map((item) => (
            <ItemBox brandName={item.브랜드} itemName={item.제품명} />
          ))
        )
      ) : (
        <EmptyBox />
      )}
    </S.MainBoxWrapper>
  );
};

export default MainBox;

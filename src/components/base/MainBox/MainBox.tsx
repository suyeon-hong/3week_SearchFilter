import React from 'react';
import { Header, ItemBox, EmptyBox } from '@components/base';
import * as S from './Style';

export interface ItemData {
  브랜드: string | null;
  제품명: string;
}

interface MainBoxProps {
  items?: ItemData[];
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

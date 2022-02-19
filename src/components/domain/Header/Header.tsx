import * as S from './Style';
import { ItemBrandBtn, Input, ResetBtn } from '@components/base';
import { Dispatch, SetStateAction, useState } from 'react';

interface HeaderPops {
  userSelect: boolean;
  setUserInput: Dispatch<SetStateAction<string>>;
  setUserSelect: Dispatch<SetStateAction<boolean>>;
  initFilteredList: () => void;
}

const Header = ({
  userSelect,
  setUserSelect,
  setUserInput,
  initFilteredList,
}: HeaderPops) => {
  const [currentInput, setCurrentInput] = useState<string>('');

  return (
    <S.Header>
      <ItemBrandBtn userSelect={userSelect} setUserSelect={setUserSelect} />
      <Input
        setUserInput={setUserInput}
        currentInput={currentInput}
        setCurrentInput={setCurrentInput}
      />
      <ResetBtn
        setCurrentInput={setCurrentInput}
        initFilteredList={initFilteredList}
      />
    </S.Header>
  );
};

export default Header;

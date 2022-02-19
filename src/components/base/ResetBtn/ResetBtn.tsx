import * as S from './Style';
import { GrPowerReset } from 'react-icons/gr';
import { Dispatch, SetStateAction } from 'react';

interface ResetBtnProps {
  initFilteredList: () => void;
  setUserInput: Dispatch<SetStateAction<string>>;
  setCurrentId: Dispatch<SetStateAction<string>>;
}

const ResetBtn = ({
  setUserInput,
  initFilteredList,
  setCurrentId,
}: ResetBtnProps) => {
  const reset = () => {
    initFilteredList();
    setUserInput('');
    setCurrentId('');
  };

  return (
    <S.ResetBtn onClick={reset}>
      <GrPowerReset />
    </S.ResetBtn>
  );
};

export default ResetBtn;

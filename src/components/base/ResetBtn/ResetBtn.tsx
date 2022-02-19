import * as S from './Style';
import { GrPowerReset } from 'react-icons/gr';
import { Dispatch, SetStateAction } from 'react';

interface ResetBtnProps {
  initFilteredList: () => void;
  setCurrentInput: Dispatch<SetStateAction<string>>;
}

const ResetBtn = ({ setCurrentInput, initFilteredList }: ResetBtnProps) => {
  const reset = () => {
    initFilteredList();
    setCurrentInput('');
  };

  return (
    <S.ResetBtn onClick={reset}>
      <GrPowerReset />
    </S.ResetBtn>
  );
};

export default ResetBtn;

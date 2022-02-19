import * as S from './Style';
import { RiSearchLine } from 'react-icons/ri';
import {
  FormEvent,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import { debounce } from 'lodash';

interface InputProps {
  setUserInput: Dispatch<SetStateAction<string>>;
}

const Input = ({ setUserInput }: InputProps) => {
  const [currentInput, setCurrentInput] = useState<string>('');

  const debouncedSearch = useCallback(
    debounce((value: string) => setUserInput(value), 300),
    [setUserInput]
  );

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  const initInput = () => {
    setCurrentInput('');
  };

  return (
    <S.InputContainer>
      <S.inputInner>
        <S.UserInput
          value={currentInput}
          placeholder="제품명, 브랜드명 검색"
          onChange={handelChange}
        />
        <S.SearchBtn type="submit" onClick={initInput}>
          <RiSearchLine />
        </S.SearchBtn>
      </S.inputInner>
    </S.InputContainer>
  );
};

export default Input;

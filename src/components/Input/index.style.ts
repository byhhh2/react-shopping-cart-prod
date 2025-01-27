import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 439px;
    height: 64px;
    font-size: 12px;
    margin: 24px 0;
  `,

  Label: styled.label`
    font-weight: bold;
  `,

  InputContainer: styled.div<{ isFocus: boolean; isCorrect: boolean; disabled: boolean }>`
    display: flex;
    border: 1px solid
      ${({ theme, isFocus, isCorrect }) =>
        !isFocus ? theme.colors.gray_002 : isCorrect ? theme.colors.green : theme.colors.red};
    border-radius: 5px;
    padding: 14px;
    margin-top: 8px;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray_003 : theme.colors.white};
  `,

  Input: styled.input`
    border: none;
    width: 100%;
    margin-left: 8px;
    background-color: transparent;

    &:focus {
      outline: 0;
    }
  `,

  ValidationContainer: styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding-left: 2px;
  `,

  Message: styled.span<{ isFocus: boolean; isCorrect: boolean }>`
    color: ${({ theme, isCorrect }) => (isCorrect ? theme.colors.green : theme.colors.red)};
    margin-left: 6px;
  `,
};

export default Styled;

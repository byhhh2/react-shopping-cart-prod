import styled from 'styled-components';

const Styled = {
  Container: styled.main`
    width: 1269px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  InputContainer: styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -30px;
  `,
};

export default Styled;

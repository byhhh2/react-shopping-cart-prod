import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 83px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    display: grid;
    box-sizing: border-box;
    grid-template-areas:
      'count increase'
      'count decrease';
  `,

  CountContainer: styled.div`
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Count: styled.span`
    width: 10px;
  `,

  CountButton: styled.div`
    font-size: 9px;
    grid-column: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    border-left: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  `,
};

export default Styled;

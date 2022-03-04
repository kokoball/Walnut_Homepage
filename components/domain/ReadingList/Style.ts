import styled from 'styled-components';

export const ReadingListContainer = styled.section`
  width: 100%;
  height: 647px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ReadingListWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const PhraseWrapper = styled.div`
  width: 334px;
`;

export const BooksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 140px;
`;

export const BooksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  &:nth-of-type(3) {
    margin-right: 0;
  }
`;

export const CheckWrapper = styled.div`
  width: 184px;
  height: 134px;
  padding-right: 20px;
`;

export const Check = styled.img`
  width: 100%;
  height: 100%;
`;

export const Book = styled.img`
  width: 170px;
  margin-top: 26px;
`;

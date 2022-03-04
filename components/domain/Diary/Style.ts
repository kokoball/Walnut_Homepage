import styled from 'styled-components';

export const DiaryContainer = styled.div`
  width: 100%;
  height: 1267px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
export const DiraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 150px;
`;
export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
`;
export const DiaryImg = styled.img`
  margin: 0 40px;
  padding: 25px;
  &:nth-of-type(odd) {
    margin-right: 300px;
  }
`;
export const Phone = styled.img`
  position: absolute;
  top: -40px;
`;

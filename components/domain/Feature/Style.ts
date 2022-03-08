import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 150px;
  background-color: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 0;
  margin-left: 70px;
  width: 1380px;
`;

export const Bookmark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -70px;
  padding-top: 200px;
  width: 460px;
  height: 643px;
  background-size: 460px 700px;
  background-position: top center;
  background-repeat: no-repeat;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  margin-top: 50px;
  margin-bottom: 1em;
`;

export const Content = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  white-space: pre-wrap;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
  word-break: keep-all;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleBox = styled.div`
  position: relative;
  height: 142px;
  padding-right: 30px;
`;

export const Title = styled.h2`
  position: absolute;
  font-size: 50px;
  font-weight: ${({ theme }) => theme.fontSize.thick};
  line-height: 70px;
`;

export const ContentBox = styled.div`
  position: relative;
  height: 120px;
`;

export const Content = styled.p`
  position: absolute;
  font-size: 24px;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fontSize.thin};
  white-space: pre-wrap;
`;

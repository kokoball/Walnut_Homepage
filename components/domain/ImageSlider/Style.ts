import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 868px;
  padding-top: 150px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SlideWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 110px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const SlideTrack = styled.div``;

export const Slide = styled.div`
  display: flex;
`;

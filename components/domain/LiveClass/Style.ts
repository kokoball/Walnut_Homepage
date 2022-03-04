import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 938px;
  margin: -5px 0;
  background-image: url(./images/3p_bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const PhraseWrapper = styled.div`
  width: 290px;
`;

export const PadWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1060px;
  height: 868px;
`;

export const PadVideo = styled.div`
  position: absolute;
  width: 700px;
  height: 526px;
  z-index: 10;
`;

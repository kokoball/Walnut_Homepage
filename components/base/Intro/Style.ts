import styled, { keyframes } from 'styled-components';

export const IntroCotainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('./images/1p_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  user-select: none;
`;

export const IntroWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('./images/1p_kids.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: saturate(200%) grayscale(20%) brightness(90%);
  box-shadow: inset 60px 60px 500px rgba(120, 75, 0, 0.6);
  user-select: none;
`;

export const PhraseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 230px;
  padding: 0 380px;
`;

export const PhraseWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 80px;
`;
export const Phrase = styled.h2`
  display: inline-block;
  color: white;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontSize.thick};
  line-height: 80px;
`;

export const UnderLine = styled.div`
  position: absolute;
  top: 70px;
  width: 220px;
  height: 11px;
  background-image: url('./images/1p_line.png');
  background: no-repeat cover center;
`;

export const Star = styled.div`
  position: absolute;
  top: -24px;
  left: -20px;
  display: inline-block;
  width: 51.42px;
  height: 52.18px;
  z-index: 10;
`;

export const runningMotion = keyframes`
  0% {
    padding-bottom: 120px;
  }
  100% {
    padding-bottom: 50px;
  }
`;

export const StyledSVGWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: 0.7s ease-in 0s infinite alternate none ${runningMotion};
`;

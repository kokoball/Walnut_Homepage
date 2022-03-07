import styled, { keyframes } from 'styled-components';

export const SlideTrack = styled.div`
  position: relative;
  width: 4360px;
  height: 240px;
`;

export const rolling = keyframes`
0% {
  transform: translateX(0px);
}
100% {
  transform: translateX(-4360px);
}
`;

export const SlideList = styled.div`
  position: absolute;
  width: 4360px;
  animation: 24s linear 0s infinite normal none running ${rolling};
`;

export const SlideListSecond = styled.div`
  position: absolute;
  width: 4360px;
  left: 4360px;
  animation: 24s linear 0s infinite normal none running ${rolling};
`;

export const SlideImg = styled.img`
  width: 188px !important;
  height: 240px;
  margin-left: 30px;
`;

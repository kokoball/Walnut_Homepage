import styled from 'styled-components';
import { IMG_PATHS } from '../../../constants';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 703px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 667px;
  margin: 0 auto;
`;

export const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Frame = styled.div`
  position: absolute;
  top: 150px;
  width: 120px;
  height: 120px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary}; ;
`;

export const RotateWrapper = styled.div<{ current: number }>`
  position: absolute;
  transition: all 1s ease 0s;
  top: 10px;
  left: 50%;
  margin: -19px 0px 0px -138px;
  padding: 8px;
  transform-origin: right center;
  transform: ${(props) => `rotate(${(props.current % 5) * 45}deg)`};
  z-index: 4;
`;

export const Rotate = styled.div`
  width: 122px;
  height: 122px;
`;

export const RotateImg = styled.img`
  width: 190px;
  height: 122px;
`;

export const User = styled.div`
  position: relative;
  top: -12px;
  left: -12px;
  width: 120px;
  height: 120px;
  z-index: 4;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Scroll = styled.div<{ current: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${(props) => `${(props.current % 5) * 20 + 20}%`};
  height: 10px;
  background-color: rgb(255, 177, 0);
  transition: all 1s ease 0s;
`;

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url(${IMG_PATHS.POSTSCRIPTS_BG}) center center / cover no-repeat;
  filter: brightness(40%);
`;

export const BtnPrev = styled.button`
  position: absolute;
  cursor: pointer;
  top: 306px;
  left: 124px;
  z-index: 4;
`;

export const BtnNext = styled.button`
  position: absolute;
  top: 306px;
  right: 124px;
  cursor: pointer;
  z-index: 4;
`;

export const BtnImg = styled.img`
  width: 44px;
  height: 40px;
`;

export const SwiperWrapper = styled.div`
  position: relative;
  width: 820px;
  height: 250px;
  margin: 0 auto;
  margin-top: 290px;
  padding: 0;
  list-style: none;
  overflow: hidden;
  z-index: 1;
`;

export const Swiper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  transition-property: transform, height;
  box-sizing: content-box;
`;

export const SlideWrapper = styled.div<{ motion: boolean }>`
  position: relative;
  flex-shrink: 0;
  display: flex;
  width: 500%;
  height: 100%;
  transition: ${(props) => (props.motion ? 'transform 0.7s' : 'none')};
`;

export const Slide = styled.div<{ motion: boolean }>`
  flex: 1;
  flex-shrink: 0;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  box-sizing: border-box;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${(props) => (props.motion ? 'opacity 0.2s ease-in-out' : 'none')};
`;

export const Id = styled.span`
  font-size: 16px;
  line-height: 2.5;
  opacity: 0.8;
`;

export const Content = styled.span`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
`;

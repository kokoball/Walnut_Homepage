import React, { useState, useEffect, useRef } from 'react';
import { POSTSCRIPTS_DATA, SLIDER_DATA_LIST, SLIDE_WIDTH } from 'utils';
import { IMG_PATHS } from '../../../constants';
import * as S from './Style';

const PostScript = () => {
  const [current, setCurrent] = useState(0);
  const [motion, setMotion] = useState(true);

  const userRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const moveNext = () => {
    setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    if (current === 2) {
      setTimeout(() => {
        setCurrent(12);
        setMotion(false);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }
    if (current === 13) {
      setTimeout(() => {
        setCurrent(3);
        setMotion(false);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${SLIDE_WIDTH * current}px)`;
    }
  }, [current]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Carousel>
          <S.Frame>
            <S.RotateWrapper current={current}>
              <S.Rotate>
                <S.RotateImg src={IMG_PATHS.POSTSCRIPTS_ROTATE} alt="rotate-img" />
              </S.Rotate>
            </S.RotateWrapper>
            <S.User>
              <S.UserImg src={POSTSCRIPTS_DATA[current % 5].img} ref={userRef} />
            </S.User>
          </S.Frame>
          <S.BtnPrev onClick={movePrev}>
            <S.BtnImg src={IMG_PATHS.POSTSCRIPTS_BTN_PREV} alt="btn-prev" />
          </S.BtnPrev>
          <S.SwiperWrapper>
            <S.Swiper>
              <S.SlideWrapper ref={sliderRef} motion={motion}>
                {SLIDER_DATA_LIST.map((postscript, idx) => {
                  return (
                    <S.Slide key={idx} motion={motion}>
                      <S.Id>{postscript.id}</S.Id>
                      <S.Content>{postscript.content}</S.Content>
                    </S.Slide>
                  );
                })}
              </S.SlideWrapper>
            </S.Swiper>
          </S.SwiperWrapper>
          <S.BtnNext onClick={moveNext}>
            <S.BtnImg src={IMG_PATHS.POSTSCRIPTS_BTN_NEXT} alt="btn-next" />
          </S.BtnNext>
        </S.Carousel>
        <S.Scroll current={current} />
        <S.Background />
      </S.Wrapper>
    </S.Container>
  );
};

export default PostScript;

import React from 'react';
import Img from 'next/image';
import * as S from './Style';

const Banner = () => {
  return (
    <S.BannerContainer>
      <S.BannerWrapper>
        <S.BannerLogo>
          <Img width="144" height="100" src="/images/2p_logo-animation.gif" alt="logo-animation" />
        </S.BannerLogo>
        <S.BannerTitle>땅콩스쿨이란?</S.BannerTitle>
        <S.BannerPhrase>
          실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
          <br /> 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.
        </S.BannerPhrase>
      </S.BannerWrapper>
    </S.BannerContainer>
  );
};

export default Banner;

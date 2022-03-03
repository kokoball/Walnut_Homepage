import MouseSVG from 'public/images/mouse.svg';
import * as S from './Style';

export const introPhrase = ['책 읽는 재미,', '땅콩 스쿨이', '만들어줄게요!'];

const Intro = () => {
  return (
    <S.IntroCotainer>
      <S.IntroWrapper>
        <S.PhraseContainer>
          {introPhrase.map((phrase, idx) => {
            return (
              <S.PhraseWrapper key={idx}>
                {idx === 1 && (
                  <S.Star>
                    <img src="./pulic/images/starIntro.png" alt="star"></img>
                  </S.Star>
                )}
                {idx === 1 ? (
                  <S.Phrase>
                    {phrase}
                    <S.UnderLine />
                  </S.Phrase>
                ) : (
                  <S.Phrase>{phrase}</S.Phrase>
                )}
              </S.PhraseWrapper>
            );
          })}
        </S.PhraseContainer>
        <S.StyledSVGWrapper>
          <MouseSVG />
        </S.StyledSVGWrapper>
      </S.IntroWrapper>
    </S.IntroCotainer>
  );
};

export default Intro;

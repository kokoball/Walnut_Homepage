import { Phrase } from 'components/base';
import { SLIDE_IMGS } from 'utils';
import * as S from './Style';

const Challenge = () => {
  return (
    <S.Wrapper>
      <Phrase
        title="입학 전 1000권 읽기!\n
        땅콩스쿨로 도전해보세요."
        content="매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n
        독서를 통해 배움의 즐거움을 알아가 보세요."
        alignment={true}
      />
      <S.SlideWrapper>
        <S.SlideTrack>
          <S.Slide>
            {SLIDE_IMGS.map((path, idx) => {
              return <img key={idx} src={path} alt="slide-img" />;
            })}
          </S.Slide>
        </S.SlideTrack>
      </S.SlideWrapper>
    </S.Wrapper>
  );
};

export default Challenge;

import { Phrase, Slide } from 'components/base';
import * as S from './Style';

const ImageSlider = () => {
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
        <Slide />
      </S.SlideWrapper>
    </S.Wrapper>
  );
};

export default ImageSlider;

import { Phrase } from 'components/base';
import { IMG_PATHS } from '../../../constants';
import * as S from './Style';

const LiveAccess = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Phrase
          title="실시간 방송 형태로 제공되는\n 신개념 책 읽기"
          content="방송 중이라면 언제든 접속하세요.\n
          수강신청, 수업예약 없이 편하게 수업참여가 가능해요."
          alignment={true}
        />
        <S.ImageWrapper>
          <S.Pad src={IMG_PATHS.ACCESS_PAD} alt="pad-img" />

          <S.Phone src={IMG_PATHS.ACCESS_PHONE} alt="phone-img" />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default LiveAccess;

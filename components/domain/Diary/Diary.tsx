import { Phrase } from 'components/base';
import { DIARY_IMGS } from 'utils';
import { IMG_PATHS } from '../../../constants';
import * as S from './Style';

const Diary = () => {
  return (
    <S.DiaryContainer>
      <S.DiraryWrapper>
        <Phrase
          title="매일 매일\n알아서 기록하는 독서 일기"
          content="오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n
          읽기만 해도 자동으로 기록되고, 공유도 가능해요."
          alignment={true}
        />
        <S.ImageWrapper>
          {DIARY_IMGS.map((img, idx) => {
            return <S.DiaryImg key={idx} src={img} />;
          })}
          <S.Phone src={IMG_PATHS.DIARY_PHONE} alt="phone" />
        </S.ImageWrapper>
      </S.DiraryWrapper>
    </S.DiaryContainer>
  );
};

export default Diary;

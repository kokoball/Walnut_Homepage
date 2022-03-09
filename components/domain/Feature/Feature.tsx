import { Phrase } from 'components/base';
import { IMG_PATHS } from '../../../constants';
import { alignLine } from 'utils/functions';
import { FEATURE_ICONS } from 'utils';
import { useScrollyY } from 'hooks';
import * as S from './Style';

interface PositionType {
  img: string;
  title: string;
  content: string;
}

const BOOKMARKS: PositionType[] = [
  {
    img: IMG_PATHS.FEATURE_FIRST,
    title: '화상수업',
    content: '휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.',
  },
  {
    img: IMG_PATHS.FEATURE_SECOND,
    title: '양방향',
    content:
      '화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.',
  },
  {
    img: IMG_PATHS.FEATURE_THIRD,
    title: '화상수업',
    content: '친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.',
  },
];

const Feature = () => {
  const { bookmarkActive } = useScrollyY();
  return (
    <S.Container>
      <Phrase title="땅콩스쿨만의 특징" alignment />
      <S.Wrapper>
        {BOOKMARKS.map(({ img, title, content }, idx) => (
          <S.Bookmark
            key={idx}
            style={{ backgroundImage: `url(${img})` }}
            bookmarkActive={bookmarkActive}
            idx={idx}
          >
            <img src={FEATURE_ICONS[idx]} alt={title} width="80" height="80" />
            <S.Title>{title}</S.Title>
            <S.Content>{alignLine(content)}</S.Content>
          </S.Bookmark>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Feature;

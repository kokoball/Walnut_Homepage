import { SLIDE_IMGS } from 'utils';
import * as S from './Style';

export const Slide = () => {
  return (
    <S.SlideTrack>
      <S.SlideList>
        {SLIDE_IMGS.map((path, idx) => {
          return <S.SlideImg key={idx} src={path} alt="slide-img" />;
        })}
      </S.SlideList>
      <S.SlideListSecond>
        {SLIDE_IMGS.map((path, idx) => {
          return <S.SlideImg key={idx} src={path} alt="slide-img" />;
        })}
      </S.SlideListSecond>
    </S.SlideTrack>
  );
};

export default Slide;

import ReactPlayer from 'react-player';
import Img from 'next/image';
import { Phrase } from 'components/base';
import { IMG_PATHS } from '../../../constants';
import { useScrollyY } from 'hooks';
import * as S from './Style';

const LiveClass = () => {
  const { autoPlay } = useScrollyY();

  return (
    <S.Container>
      <S.Wrapper>
        <S.PhraseWrapper>
          <Phrase
            title="랜선 라이브 북클래스"
            content="친구들과 함께                    
            그림 그리기, 퀴즈 풀기. 
            선생님과 대화하며 경험해요!"
          ></Phrase>
        </S.PhraseWrapper>
        <S.PadWrapper>
          <Img width="746" height="574" src={IMG_PATHS.LIVE_PAD}></Img>
          <S.PadVideo>
            <ReactPlayer
              loop
              muted={autoPlay}
              playing={autoPlay}
              url={IMG_PATHS.LIVE_VIDEO}
              width="100%"
              height="100%"
            />
          </S.PadVideo>
        </S.PadWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default LiveClass;

import { alignLine } from 'utils/functions';
import * as S from './Style';

interface PhraseProps {
  title: string;
  content?: string;
  alignment?: boolean;
}

const Phrase = ({ title, content, alignment = false }: PhraseProps) => {
  return (
    <S.Container alignment={alignment}>
      <S.Wrapper>
        <S.TitleBox alignment={alignment}>
          <S.Title>{alignLine(title)}</S.Title>
        </S.TitleBox>
        {content && (
          <S.ContentBox alignment={alignment}>
            <S.Content>{alignLine(content)}</S.Content>
          </S.ContentBox>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Phrase;

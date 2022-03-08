import { alignLine } from 'utils/functions';
import * as S from './Style';

interface PhraseProps {
  title: string;
  content?: string;
  alignment?: boolean;
  nit?: boolean;
}

const Phrase = ({ title, content, alignment = false, nit = false }: PhraseProps) => {
  return (
    <S.Container alignment={alignment} nit={nit}>
      <S.Wrapper>
        <S.TitleBox alignment={alignment} nit={nit}>
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

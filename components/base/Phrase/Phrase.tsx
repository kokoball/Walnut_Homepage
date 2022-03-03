import * as S from './Style';

interface PhraseProps {
  title: string;
  content: string;
}

export const Phrase = ({ title, content }: PhraseProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>{title}</S.Title>
        </S.TitleBox>
        <S.ContentBox>
          <S.Content>{content}</S.Content>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
};

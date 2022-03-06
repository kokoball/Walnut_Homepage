import { Phrase, Check } from 'components/base';
import { useScrollyY } from 'hooks';
import { READING_BOOKS } from 'utils';
import * as S from './Style';

const ReadingList = () => {
  const { checkAnimation } = useScrollyY();

  return (
    <S.ReadingListContainer>
      <S.ReadingListWrapper>
        <S.PhraseWrapper>
          <Phrase
            title="교육 전문가들이 선정한 도서"
            content="호두랩스의 교육 전문가들이    
            교과 수록, 초등 필독 도서 등    
            아동 교육에 적합한 도서를         
            직접 선정해요!"
          />
        </S.PhraseWrapper>
        <S.BooksContainer>
          {READING_BOOKS.map((book, idx) => (
            <S.BooksWrapper key={idx}>
              <S.CheckWrapper>
                <Check checkAnimation={checkAnimation} src={book.check} wait={(idx + 1) * 500} />
              </S.CheckWrapper>
              <S.Book src={book.book} />
            </S.BooksWrapper>
          ))}
        </S.BooksContainer>
      </S.ReadingListWrapper>
    </S.ReadingListContainer>
  );
};

export default ReadingList;

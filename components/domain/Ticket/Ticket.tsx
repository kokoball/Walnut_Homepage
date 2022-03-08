import React from 'react';
import { Phrase } from 'components/base';
import { useScrollyY } from 'hooks';
import { IMG_PATHS } from '../../../constants';
import * as S from './Style';

const Ticket = () => {
  const { ticketActive } = useScrollyY();

  return (
    <S.Container>
      <S.Wrapper>
        <Phrase title="지금 다운로드 받으세요!" alignment={true} nit={true} />
        <S.TicketWrapper>
          <S.TicketImage src={IMG_PATHS.TICKET_IMG} />
          <S.TicketLeft>
            <S.TicketLogo>
              <S.Logo src={IMG_PATHS.HEADER_LOGO} />
            </S.TicketLogo>
            <S.TicketTitle>
              책을 보는 <br />
              새로운 방법
            </S.TicketTitle>
            <S.TicketContent>지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!</S.TicketContent>
          </S.TicketLeft>
          <S.TicketRight>
            <S.Tooltip ticketActive={ticketActive}>
              <S.TooltipSpan>회원가입에 걸리는 시간 단 3초!</S.TooltipSpan>
            </S.Tooltip>
            <S.TicketBtn ticketActive={ticketActive}>
              <img src="/images/download.svg" alt="download"></img>
              <S.BtnSpan>앱 다운로드 하기</S.BtnSpan>
            </S.TicketBtn>
          </S.TicketRight>
        </S.TicketWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Ticket;

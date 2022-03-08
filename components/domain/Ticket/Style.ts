import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 921px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0 30px;
  padding-top: 150px;
`;

export const TicketWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1240px;
  height: 534px;
`;

export const TicketImage = styled.img`
  position: absolute;
  width: 1240px;
  height: 534px;
`;

export const TicketLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 640px;
  height: 534px;
  padding-top: 124px;
  padding-left: 140px;
  z-index: 10;
`;

export const TicketRight = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 600px;
  height: 534px;
  padding-left: 177px;
  padding-top: 182px;
  z-index: 10;
`;

export const TicketLogo = styled.div`
  width: 157px;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const TicketTitle = styled.h2`
  padding-top: 19px;
  font-size: 56px;
  font-weight: ${({ theme }) => theme.fontSize.thin};
  line-height: 66px;
`;
export const TicketContent = styled.p`
  padding-top: 20px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontSize.thin};
  line-height: 1.8;
`;

export const Tooltip = styled.div<{ ticketActive: boolean }>`
  position: absolute;
  top: 190px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(-50%);
  transition: all 0.3s ease-in;
  transition-delay: 0.8s;
  opacity: ${(props) => (props.ticketActive ? 1 : 0)};
`;

export const TooltipSpan = styled.span`
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 24px;
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 7px 0;
    border-color: none;
    border-color: #0000007f transparent;
    display: block;
    width: 0;
    height: 0;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
  }
`;

export const TicketBtn = styled.button<{ ticketActive: boolean }>`
  position: relative;
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 257px;
  height: 70px;
  margin-top: ${(props) => (props.ticketActive ? '70px' : '20px')};
  border-radius: 50px;
  background-color: #333333;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in;
  transition-delay: 0.3s;
`;

export const BtnSpan = styled.span`
  padding: 0 15px;
  font-size: 20px;
  line-height: 32px;
`;

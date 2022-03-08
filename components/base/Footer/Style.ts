import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 479px;
  padding: 60px;
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  h6 {
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    a {
      text-decoration: underline;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  font-size: 16px;
  line-height: 28px;
  a {
    margin-right: 20px;
    &.privacyPolicy {
      font-weight: 700;
    }
  }
`;

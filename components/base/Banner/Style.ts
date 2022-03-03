import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 573px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 90px 0;
`;

export const BannerLogo = styled.div``;

export const BannerTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: ${({ theme }) => theme.fontSize.thin};
  line-height: 72px;
`;

export const BannerPhrase = styled.p`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  line-height: 40px;
  white-space: pre-wrap;
`;

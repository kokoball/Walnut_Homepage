import styled, { css } from 'styled-components';

export const Container = styled.div<{ alignment: boolean; nit: boolean }>`
  width: 100%;
  margin-bottom: ${(props) => (props.nit ? '0px' : '40px')};
  color: ${({ theme }) => theme.colors.text};
  text-align: ${(props) => props.alignment && `center`};
  word-break: keep-all;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleBox = styled.div<{ alignment: boolean; nit: boolean }>`
  position: relative;
  height: ${(props) => (props.nit ? '122px' : '142px')};
  padding-right: 30px;
  ${(props) =>
    props.alignment &&
    css`
      display: flex;
      justify-content: center;
      padding-right: 0;
    `}
`;

export const Title = styled.h2`
  position: absolute;
  font-size: 50px;
  font-weight: ${({ theme }) => theme.fontSize.thick};
  line-height: 70px;
  word-break: keep-all;
`;

export const ContentBox = styled.div<{ alignment: boolean }>`
  position: relative;
  height: 120px;
  ${(props) =>
    props.alignment &&
    css`
      display: flex;
      justify-content: center;
      padding-right: 0;
    `}
`;

export const Content = styled.p`
  position: absolute;
  font-size: 24px;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fontSize.thin};
  white-space: pre-wrap;
`;

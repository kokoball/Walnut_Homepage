import React, { ReactChild } from 'react';
import { Header } from 'components/base';
import * as S from './Style';

interface LayoutProps {
  children: ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <Header />
      {children}
    </S.LayoutWrapper>
  );
};

export default Layout;

import React from 'react';
import { Header } from 'components/base';
import * as S from './Style';

interface LayoutProps {
  children: React.ReactNode;
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

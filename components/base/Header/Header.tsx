import Link from 'next/link';
import { useScrollyY } from 'hooks';
import { navLinks } from 'utils';
import * as S from './Style';

const Header = ({}) => {
  const { backgroundTransparency, boxShadow, filter } = useScrollyY();
  return (
    <S.HeaderWrapper
      backgroundTransparency={backgroundTransparency}
      boxShadow={boxShadow}
      filter={filter}
    >
      <S.HeaderNavBar>
        <S.HeaderNav>
          <Link href="/">
            <S.Logo filter={filter}>
              <img src="./assets/logo.png" alt="title" />
            </S.Logo>
          </Link>
          <S.HeaderNavList>
            {navLinks.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              );
            })}
          </S.HeaderNavList>
        </S.HeaderNav>
      </S.HeaderNavBar>
    </S.HeaderWrapper>
  );
};

export default Header;

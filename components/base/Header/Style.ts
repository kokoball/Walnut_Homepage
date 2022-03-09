import styled from 'styled-components';

interface HeaderStylePropsType {
  backgroundTransparency?: number;
  boxShadow?: number;
  filter: number;
}

export const HeaderWrapper = styled.header<HeaderStylePropsType>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  background-color: ${(props) => `rgba(255, 255, 255, ${props.backgroundTransparency})`};
  color: ${(props) => (props.filter > 50 ? '#333333' : ' #FFFFFF')};
  box-shadow: ${(props) => `rgb(0, 0, 0 / ${props.boxShadow}) 0px 0px 20px 6px`};
  z-index: 100;
`;

export const HeaderNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const Logo = styled.a<HeaderStylePropsType>`
  width: 154.5px;
  height: inherit;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) => `invert(${props.filter}%)`};
  }
`;

export const HeaderNavList = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    margin: 0 25px;
  }
  li:nth-child(3) {
    margin-right: -1px;
    &:after {
      content: '|';
      margin-left: 26px;
    }
  }
`;

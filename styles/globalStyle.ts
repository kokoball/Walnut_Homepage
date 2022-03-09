import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { theme } from 'styles';

const globalStyle = createGlobalStyle`
		@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 400;
		src: local('AppleSDGothicNeoM00'),
			url('../public/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.ttf')
				format('truetype'),
			url('../public/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.eot')
				format('embedded-opentype'),
			url('../public/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff2')
				format('woff2'),
			url('../public/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff')
				format('woff');
		unicode-range: U+AC00- U+D7A3, U+0030-0039;
	}

	${reset}
	*, *::before, *::after {
    box-sizing: border-box;
  }
	* {
		box-sizing: border-box;
		margin: 0;
	}
	html, body {
		background-color: #fff;
		font-family: 'Apple SD Gothic Neo',system-ui, Dotum,'돋움', Helvetica, sans-serif;
	}
	body {
    width: 100%;
    height: 100%;
		color: ${({ theme }) => theme.colors.text};
  }
	a {
		color: inherit;
		text-decoration: none;
	}
	ol, ul, li {
		list-style: none;
	}
	
	button {
		all: unset;
	}
`;

export default globalStyle;

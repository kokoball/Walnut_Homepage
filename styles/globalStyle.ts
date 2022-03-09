import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { theme } from 'styles';

const globalStyle = createGlobalStyle`
	${reset}
	*, *::before, *::after {
    box-sizing: border-box;
  }
	* {
		box-sizing: border-box;
		margin: 0;
	}
	html, body {
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

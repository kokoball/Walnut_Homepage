import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
	margin: 0;
}

html, body {
	background-color: #fff;
	font-family: apple-system, 'Roboto', Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif; 
}

a {
	color: inherit;
	text-decoration: none;
}

button {
	cursor: pointer;
}

ol, ui, li {
	list-style: none;
}

img {
	display: block;
	width: 100%;
	height: 100%;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { font16 } from './fonts';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
	margin: 0;
	font-family: 'Noto Sans KR', Dotum, '돋움', Helvetica, sans-serif; 
}

html, body {
	background-color: ${theme.colors.background};
	font-family: 'Noto Sans KR', Dotum, '돋움', Helvetica, sans-serif; 
	${font16(700)};
}

a {
	color: inherit;
	text-decoration: none;
}

button {
	background-color: white;
	border: none;
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

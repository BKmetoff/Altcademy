import { createGlobalStyle } from 'styled-components'

const SHADOW = 'rgba(143, 111, 63, 0.37) 0px 4px 16px;'

const COLORS = {
	dark: '#483400',
	background: '#EFDA94',
	secondary: '#F5C95C',
	primary: '#FDAF09',
	light: '#ebebeb',
}

const BORDER_RADIUS = {
	S: '3px',
	M: '5px',
}

const MARGIN = {
	auto: 'auto',
	XS: '8px',
	S: '12px',
	M: '30px',
	L: '50px',
	XL: '70px',
}

const PADDING = {
	XXS: '5px',
	XS: '10px',
	S: '15px',
	M: '30px',
	L: '50px',
	XL: '80px',
}

export const Theme = {
	colors: COLORS,
	shadow: SHADOW,
	borderRadius: BORDER_RADIUS,
	margin: MARGIN,
	padding: PADDING,
	opacity: 0.95,
	hoverScale: 'scale(1.02)',
}

export const GlobalStyle = createGlobalStyle`
  
	* {
		box-sizing: border-box;
	}

	body {
    background: ${Theme.colors.background};
    padding: 0;
		margin: 0;
    font-family: monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    /* overflow-x: hidden; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }


  textarea,
	input,
	::placeholder {
		/* font-size:14px;
		letter-spacing: 1px;
		line-height: 1.9; */
		font-family: monospace
	}

	a {
		text-decoration:none;
	}

	a:hover { 
		text-decoration: none;
	}
`

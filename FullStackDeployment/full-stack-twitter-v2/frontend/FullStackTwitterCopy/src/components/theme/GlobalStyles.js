import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body * {
  padding: 0;
  margin: 0;
  font-weight: 200;
  font-family: 'Iosevka';
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	-webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  cursor: pointer;
}

::placeholder {
  text-align: center;
}

`
export default GlobalStyle

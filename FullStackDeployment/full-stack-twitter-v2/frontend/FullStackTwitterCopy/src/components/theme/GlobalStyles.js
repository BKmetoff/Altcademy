import { createGlobalStyle } from 'styled-components'
import { COLORS } from './Theme'

const GlobalStyle = createGlobalStyle`

body {
  background: ${COLORS.blue_light};
}

* {
  padding: 0;
  margin: 0;
  font-weight: 400;
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
  :hover {
    cursor: pointer;
  }
}

::placeholder {
  text-align: center;
}

`
export default GlobalStyle

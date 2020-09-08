import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body * {
  padding: 0;
  margin: 0;
  font-weight: 200;
  font-family: 'Iosevka';
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

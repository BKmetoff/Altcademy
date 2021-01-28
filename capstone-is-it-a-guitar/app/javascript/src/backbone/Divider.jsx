import styled, { css } from 'styled-components'
import { Theme } from './style/Theme'

const BaseDivider = styled.hr`
	margin-left: ${Theme.padding.S};
	margin-right: ${Theme.padding.S};
	border: 1px solid ${Theme.colors.background};
`

export default BaseDivider

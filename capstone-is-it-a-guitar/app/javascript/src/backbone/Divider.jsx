import styled, { css } from 'styled-components'

const BaseDivider = styled.hr`
	margin: 20px;
	transform: ${({ vertical = false }) => vertical && 'rotate(180deg)'};
`

export default BaseDivider

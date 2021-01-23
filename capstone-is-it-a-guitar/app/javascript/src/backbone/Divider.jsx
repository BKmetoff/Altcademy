import styled, { css } from 'styled-components'

export const BaseDivider = styled.hr`
	margin: 20px;
	transform: ${({ vertical = false }) => vertical && 'rotate(90deg)'};
`

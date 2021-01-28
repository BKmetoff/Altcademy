import styled from 'styled-components'
import { Theme } from '../backbone/style/Theme'

export const Container = styled.div`
	max-width: 1024px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: ${Theme.margin.auto};
	margin-right: ${Theme.margin.auto};
	box-shadow: ${Theme.shadow};
	background-color: ${Theme.colors.secondary};
`

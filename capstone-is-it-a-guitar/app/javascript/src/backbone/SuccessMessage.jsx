import styled from 'styled-components'
import { Theme } from './style/Theme'

const SuccessMessage = styled.div`
	margin-top: ${Theme.margin.M};
	margin-left: ${Theme.margin.XS};
	max-width: 200px;

	p {
		color: ${Theme.colors.dark};
	}
`

export default SuccessMessage

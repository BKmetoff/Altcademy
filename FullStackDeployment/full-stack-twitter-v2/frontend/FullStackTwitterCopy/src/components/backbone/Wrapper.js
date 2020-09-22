import styled from 'styled-components'

export const MainWrapper = styled.section`
	background: ${(props) => props.theme.colors.blue_light};
	height: 100%;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ActionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

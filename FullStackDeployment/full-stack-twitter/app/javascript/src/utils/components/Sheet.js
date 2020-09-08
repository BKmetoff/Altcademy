import styled from 'styled-components'

export default styled.div`
	background: ${(props) => props.theme.colors.light};
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 3px;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
`

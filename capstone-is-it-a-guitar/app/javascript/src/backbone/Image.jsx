import styled, { css } from 'styled-components'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	${({ imageCard }) =>
		imageCard !== undefined &&
		css`
			height: 100%;
			border-radius: 3px;
		`}
`

export default Image

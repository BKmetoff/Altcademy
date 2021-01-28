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

	${({ imageCheckGuitar }) =>
		imageCheckGuitar !== undefined &&
		css`
			object-fit: cover;
			width: 100%;
			height: 400px;
		`}
`

export default Image

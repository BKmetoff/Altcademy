import styled, { css } from 'styled-components'
import { Theme } from './style/Theme'

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
			width: 100%;
			height: auto;
		`}
	border-radius: ${Theme.borderRadius.S}
`

export default Image

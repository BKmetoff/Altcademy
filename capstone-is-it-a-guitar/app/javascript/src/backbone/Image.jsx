import styled, { css } from 'styled-components'
import { Theme } from './style/Theme'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	border-radius: ${Theme.borderRadius.S};
	box-shadow: ${Theme.shadow};
	margin: ${Theme.margin.M};

	${({ imageCard }) =>
		imageCard !== undefined &&
		css`
			height: 100%;
			border-radius: 3px;
			max-width: 200px;
			object-fit: contain;
			margin: 0px 0px 0px ${Theme.margin.XS};
		`}

	${({ imageCheckGuitar }) =>
		imageCheckGuitar !== undefined &&
		css`
			width: 100%;
			height: auto;
		`}
`

export default Image

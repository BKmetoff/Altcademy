import styled, { css } from 'styled-components'
import { Theme } from './style/Theme'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	border-radius: ${Theme.borderRadius.S};
	box-shadow: ${Theme.shadow};
	margin-bottom: ${Theme.margin.M};

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
			max-width: 60%;
			max-height: 75%;
			object-fit: contain;
			margin-right: ${Theme.margin.S};
			margin-left: ${Theme.margin.S};
		`}
`

export default Image

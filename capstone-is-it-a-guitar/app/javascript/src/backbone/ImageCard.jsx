import React from 'react'
import styled from 'styled-components'

import { Theme } from '../backbone/style/Theme'
import Image from '../backbone/Image'
import formatDate from '../utils/formatDate'
import Divider from '../backbone/Divider'

const ImageCardWrapper = styled.div`
	border-radius: 3px;
	height: 130px;
	width: 350px;
	display: flex;
	flex-direction: row;
	margin: 5px;
	padding: 2px;
	justify-content: space-between;
	background: ${Theme.colors.background};
	box-shadow: ${Theme.shadow};
`

const ImageMetaWrapper = styled.div`
	flex-direction: column;
	margin: 5px;
	align-items: center;
	justify-content: center;
	display: flex;
`

const ImageMetaDivider = styled(Divider)`
	margin: 0;
	border: 1px solid ${Theme.colors.dark};
	margin-top: ${Theme.margin.S};
	margin-bottom: ${Theme.margin.XS};
	width: 5%;
`

export default function ImageCard({ image }) {
	return (
		<ImageCardWrapper>
			<ImageMetaWrapper>
				<p>Uploaded</p>
				<p> {formatDate(image.created_at)}</p>
				<ImageMetaDivider />
				<p>{image.success ? 'Success' : 'Fail'}</p>
			</ImageMetaWrapper>
			<Image imageCard src={image.image_url} />
		</ImageCardWrapper>
	)
}

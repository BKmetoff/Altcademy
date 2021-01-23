import React from 'react'
import styled from 'styled-components'

import Image from '../backbone/Image'
import formatDate from '../utils/formatDate'

const ImageCardWrapper = styled.div`
	border-radius: 3px;
	border: 1px solid black;
	height: 120px;
	width: 240px;
	display: flex;
	flex-direction: row;
	margin: 5px;
	padding: 2px;
`

const ImageMetaWrapper = styled.div`
	flex-direction: column;
	margin: 5px;
`

export default function ImageCard({ image }) {
	return (
		<ImageCardWrapper>
			<Image imageCard src={image.IMG_URL} />
			<ImageMetaWrapper>
				<p>Uploaded {formatDate(image.IMG_DATE)}</p>
				<p>{image.IMG_STATUS ? 'Success!' : 'Fail'}</p>
			</ImageMetaWrapper>
		</ImageCardWrapper>
	)
}

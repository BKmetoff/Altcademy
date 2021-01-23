import React from 'react'
import ImageCard from '../backbone/ImageCard'

import { MOCK_DATA } from '../utils/mock'

export default function History() {
	return (
		<div>
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
		</div>
	)
}

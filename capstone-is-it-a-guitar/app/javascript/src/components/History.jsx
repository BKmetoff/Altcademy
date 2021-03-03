import React, { useContext } from 'react'
import { CurrentUserContext } from '../components/App'

import LogInError from './LogInError'
import ImageCard from '../backbone/ImageCard'

import { MOCK_DATA } from '../utils/mock'

export default function History() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	if (!userLoggedInStatus.loggedIn && !userLoggedInStatus.user.user_id) {
		return <LogInError />
	}

	return (
		<div>
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
		</div>
	)
}

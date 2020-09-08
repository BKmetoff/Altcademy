import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout'
import { TitleBig, Text } from './utils/components/Text'
import Sheet from './utils/components/Sheet'
import Button from './utils/components/Button'

const Home = () => (
	<Layout>
		<TitleBig>holly $h!t, not another twitter copy!</TitleBig>
		<Sheet>
			<Text>log in or sign up</Text>

			<Button type='primary'>log in</Button>
			<Button type='secondary'>sign up</Button>
		</Sheet>
	</Layout>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Home />,
		document.body.appendChild(document.createElement('div'))
	)
})

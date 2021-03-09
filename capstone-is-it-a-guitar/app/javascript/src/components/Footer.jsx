import React from 'react'

import { Wrapper } from '../backbone/Container'
import Text from '../backbone/Text'

export default function Footer() {
	return (
		<Wrapper footer justifyBetween fullWidth>
			<Text marginLeft small>
				<a href='https://www.altcademy.com/' target='_blank'>
					altcademy
				</a>
			</Text>

			<Text marginRight small>
				<a href='https://github.com/BKmetoff' target='_blank'>
					git/bkmetoff
				</a>
			</Text>
		</Wrapper>
	)
}

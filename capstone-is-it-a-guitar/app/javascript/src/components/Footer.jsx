import React from 'react'
import { Wrapper } from '../backbone/Container'

export default function Footer() {
	return (
		<Wrapper footer justifyBetween fullWidth>
			<span>
				<a href='https://www.altcademy.com/' target='_blank'>
					altcademy
				</a>
			</span>

			<span>
				<a href='https://github.com/BKmetoff' target='_blank'>
					git/bkmetoff
				</a>
			</span>
		</Wrapper>
	)
}

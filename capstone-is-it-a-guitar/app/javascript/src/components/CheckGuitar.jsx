import React from 'react'

export default function CheckGuitar({ dispatch, state }) {
	return (
		<div>
			this is check guitar
			<button onClick={() => dispatch('next')}>{state}</button>
		</div>
	)
}

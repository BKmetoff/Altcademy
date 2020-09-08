import React, { Component } from 'react'
import styled from 'styled-components'

import { ActionsWrapper } from './Wrapper'
import Button from './Button'
import { Text } from './Text'
import Input from './Input'

export class Form extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}

	render() {
		return (
			<ActionsWrapper>
				{this.props.type == 'signup' ? (
					<>
						<Text>
							don't have an account?
							<br /> how dare you.
						</Text>
						<Input ref={this.inputRef} placeholder='username'></Input>
					</>
				) : null}

				<Input ref={this.inputRef} placeholder='email'></Input>
				<Input ref={this.inputRef} placeholder='password'></Input>

				{this.props.type == 'signup' ? (
					<Button type='primary'>create account</Button>
				) : (
					<Button type='primary'>log in</Button>
				)}
			</ActionsWrapper>
		)
	}
}

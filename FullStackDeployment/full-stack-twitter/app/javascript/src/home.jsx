import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import styled from  'styled-components'

import Layout from './layout'

import { ActionsWrapper } from './utils/components/Wrapper'
import { TitleBig, Text } from './utils/components/Text'
import Sheet from './utils/components/Sheet'
import Button from './utils/components/Button'
import { Form } from './utils/components/Form'

const Home = () => (
	<Router>
		<Layout>
			<TitleBig>holly $h!t, not another twitter copy!</TitleBig>
			<Sheet height='250' width='200'>
				<Switch>
					<Route
						path='/'
						exact
						render={() => (
							<ActionsWrapper>
								<Text>log in or sign up</Text>
								<Link to='/login'>
									<Button type='primary'>log in</Button>
								</Link>

								<Link to='/signup'>
									<Button type='secondary'>sign up</Button>
								</Link>
							</ActionsWrapper>
						)}
					/>
					<Route path='/login' render={() => <Form type='login'></Form>} />
					<Route path='/signup' render={() => <Form type='signup'></Form>} />
				</Switch>
			</Sheet>
		</Layout>
	</Router>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Home />,
		document.body.appendChild(document.createElement('div'))
	)
})

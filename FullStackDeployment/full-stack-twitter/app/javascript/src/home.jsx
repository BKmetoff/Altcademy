import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import styled from  'styled-components'

import Layout from './layout'

import { ActionsWrapper } from './utils/components/backbone/Wrapper'
import { TitleBig, Text } from './utils/components/backbone/Text'
import Sheet from './utils/components/backbone/Sheet'
import Button from './utils/components/backbone/Button'
import Form from './utils/components/Form'

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
									<Button kind='primary'>log in</Button>
								</Link>

								<Link to='/signup'>
									<Button kind='secondary'>sign up</Button>
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

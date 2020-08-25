import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Layout from './layout'

const SubRoute = ({ match }) => (
	<p className='p-2 mt-2, border border-light'>{match.url}</p>
)

const Demo = () => (
	<Router>
		<Layout>
			<h1>Demo Page</h1>
			<ul className='nav'>
				<li className='nav-item'>
					<Link className='nav-link' to='/demo/a'>
						Link A
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/demo/b'>
						Link B
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/demo/c'>
						Link C
					</Link>
				</li>
			</ul>
			<Switch>
				<Route path='/demo/a' exact component={SubRoute} />
				<Route path='/demo/b' exact component={SubRoute} />
				<Route path='/demo/c' exact component={SubRoute} />
			</Switch>
		</Layout>
	</Router>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Demo />,
		document.body.appendChild(document.createElement('div'))
	)
})

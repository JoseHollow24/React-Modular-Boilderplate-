import React from 'react';
import NavBar from './Navbar.js'

const Layout =(props) =>(
	<div>
		<NavBar/>
		{props.children}
	</div>
)
export default Layout;
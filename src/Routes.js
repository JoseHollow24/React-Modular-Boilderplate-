import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import AppRoute from './Components/AppRoutes.js'
import Home from './Pages/Home/home.js';
import About from './Pages/about.js';
import Portfolio from './Pages/portfolio.js';
import Layout from './Components/Layout.js'

const Routes = () => (

	 <HashRouter>
		 <switch>
			 	<AppRoute path='/' Component={Home} Layout={Layout} exact />
			 	<AppRoute path='/About' Component={About} Layout={Layout} />
			 	<AppRoute path='/Portfolio' Component={Portfolio} Layout={Layout} />
		 </switch>
	 </HashRouter>
)

export default Routes;
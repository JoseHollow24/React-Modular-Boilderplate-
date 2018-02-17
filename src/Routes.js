import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from './App.js';

const Routes = () => (

	 <HashRouter>
	 	<Route path='/' component={App} />
	 </HashRouter>
)

export default Routes;
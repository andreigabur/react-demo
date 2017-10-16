import React, { Component } from 'react';
import Clock from './clock/Clock';
import Table from './table/Table';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		tableData: [
			{
				name: 'Cip',
				location: 'Office',
			},
			{
				name: 'Cheng',
				location: 'Desk',
			},
		]
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Clock />
				<Table tableData={this.state.tableData} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Clock from './clock/Clock';
import Table from './table/Table';
import Chart from './chart/Chart';
import Paselect from './paselect/Paselect';

import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		tableData: [
			{
				name: 'Cip',
				lastName: 'MOCANU',
				location: 'Office',
			},
			{
				name: 'Di',
				lastName: 'MOCANU',
				location: 'Desk',
			},
		],
		highchartsOptions: {
			chart: {
				type: 'areaspline'
			},
			title: {
				text: 'Average fruit consumption during one week'
			},
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 150,
				y: 100,
				floating: true,
				borderWidth: 1
			},
			xAxis: {
				categories: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday'
				],
				plotBands: [{ // visualize the weekend
					from: 4.5,
					to: 6.5,
					color: 'rgba(68, 170, 213, .2)'
				}]
			},
			yAxis: {
				title: {
					text: 'Fruit units'
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: ' units'
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.5
				}
			},
			series: [{
				name: 'John',
				data: [3, 4, 3, 5, 4, 10, 12]
			}, {
				name: 'Jane',
				data: [1, 3, 4, 3, 3, 5, 4]
			}]
		},
		options: [
			{
				value: 1,
				label: 'Cip'
			},
			{	
				value: 2,
				label: 'Cheng'
			}
		],
		value: 2
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Clock />
				<Chart highchartsOptions={this.state.highchartsOptions} />
				<Paselect options={this.state.options} value={this.state.value} />
				<Table tableData={this.state.tableData} />
			</div>
		);
	}
}

export default App;

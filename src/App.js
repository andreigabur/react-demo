import React, { Component } from 'react';
import Clock from './section1/clock/Clock';
import Table from './section1/table/Table';
import Chart from './section1/chart/Chart';
import Paselect from './section1/paselect/Paselect';
import Library from './library/Library';

import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.changeSection = this.changeSection.bind(this);
	}

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
		value: 2,
		section: 1
	}

	changeSection(value) {
		this.setState({
			section: value
		});
	};

	render() {

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div className="tabs">
					<ul>
						<li className={this.state.section===1?'is-active':''}
							onClick={() => this.changeSection(1)}
							>
							<a>Section 1</a>
						</li>
						<li className={this.state.section===2?'is-active':''}
							onClick={() => this.changeSection(2)}
							>
							<a>Section 2</a>
						</li>
					</ul>
				</div>
				{(this.state.section === 1)?
					<div>
						<div className="columns is-desktop">
							<div className="column is-offset-3 is-6">
								<Clock />
							</div>
						</div>
						<div>
							<Chart highchartsOptions={this.state.highchartsOptions} />
						</div>
						<div className="columns is-desktop">
							<div className="column is-4">
								<Paselect options={this.state.options} value={this.state.value} />
							</div><div className="column is-8">
								<Table tableData={this.state.tableData} />
							</div>
						</div>
					</div>
					: (this.state.section === 2) ?
						<Library />
					: ''
				}
			</div>
		);
	}
}

export default App;

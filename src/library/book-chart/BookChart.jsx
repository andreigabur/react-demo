import React, { Component } from 'react';
import Highcharts from 'highcharts';

import './BookChart.css';

class BookChart extends Component {
	
	constructor(...args) {
		super(...args);
		this.getSeries = this.getSeries.bind(this);
	}

	state = {
		highchartsOptions: {
			title: {
				text: 'Books by year'
			},
			yAxis: {
				title: {
					text: 'Number of books'
				}
			},
			legend: {
				enabled: false
			},
			series: [{
				name: 'Books',
				data: this.getSeries(this.props.books),
				marker: {
					enabled: true,
					radius: 4
				}
			}]
		}
	}

	getSeries(books) {
		let series = books.reduce((series, book) => {
			for (let value of series)
				if (value[0] === book.year) {
					value[1]++;
					return series;
				}

			series.push([book.year, 1]);
			return series;
		}, []).sort((a, b) => {
			return a[0] - b[0];
		})
		return series;
	}

	componentDidMount() {
		Highcharts.chart('container', this.state.highchartsOptions);
	}

	componentWillReceiveProps(nextProps) {
		if (JSON.stringify(this.props.books) !== JSON.stringify(nextProps.books)) {
			let highchartsOptions = {
				...this.state.highchartsOptions,
				series: [{
					name: 'Books',
					data: this.getSeries(nextProps.books),
					marker: {
						enabled: true,
						radius: 4
					}
				}]
			}
			Highcharts.chart('container', highchartsOptions);
		}
	}

	render() {
		return (
			<div className="book-chart card">
				<div id="container"></div>
			</div>
		)
	}
}

export default BookChart;
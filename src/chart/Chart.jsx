import React, { Component } from 'react';
import Highcharts from 'highcharts';
import './Chart.css';

class Chart extends Component {

	/** 
	 * Define component state
	 */
	state = {
		highchartsOptions: (this.props.highchartsOptions) ? this.props.highchartsOptions : {}
	}

	/**
	 * React component functions
	 */
	componentDidMount() {
		Highcharts.chart('container', this.state.highchartsOptions);
	}

	/**
	 * Render the component
	 */
	render() {
		return(
			<div className="chart">
				<div id="container"></div>
			</div>
		)
	}
}

export default Chart;
import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
	
	/** 
	 * Define component state
	 */
	state = {
		tableData: (this.props.tableData) ? this.props.tableData : [],
	}
	
	renderRow(row, index) {
		return (
			<tr key={index}>
				{Object.keys(row).map((key) => 
					<td key={row[key]}>{row[key]}</td>
				)}
			</tr>
		);
	}

	renderHead(row) {
		return (
			<tr>
				{Object.keys(row).map((key) => 
					<th key={key}>{key}</th>
				)}
			</tr>
		)
	}

	/**
	 * Render the component
	 */
	render() {
		let noDataMessage = "";
		if (!(this.state.tableData.length > 0))
			noDataMessage = <div>No data for this table</div>

		return (
			<div className="Table">
				
				{ (noDataMessage !== "") ?
					noDataMessage
				:
					<table>
						<thead>
							{this.renderHead(this.state.tableData[0])}
						</thead>
						<tbody>
							{this.state.tableData.map(this.renderRow, this)}
						</tbody>
					</table>
				}
			</div>
		)
	}
}

export default Table;
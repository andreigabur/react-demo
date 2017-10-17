import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
	
	/** 
	 * Define component state
	 */
	state = {
		tableData: (this.props.tableData) ? this.props.tableData : [],
	}

	/**
	 * Render the component
	 */
	render() {
		let noDataMessage = "";
		let tableHead;
		if (this.state.tableData.length > 0) {
			tableHead = <tr>
				{Object.keys(this.props.tableData[0]).map((key) => 
					<th key={key}>{key}</th>
				)}
			</tr>
		} else {
			noDataMessage = <div>No data for this table</div>
		}

		return (
			<div className="Table">
				
				{ (noDataMessage !== "") ? (
					noDataMessage
				) : (
					<table>
						<thead>
							{tableHead}
						</thead>
						<tbody>
							{this.state.tableData.map((row, index) => 
								<tr key={index}>
									<td>{row.name}</td>
									<td>{row.location}</td>
								</tr>
							)}
						</tbody>
					</table>
				)}
			</div>
		)
	}
}

export default Table;
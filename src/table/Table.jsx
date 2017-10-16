import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

	/**
	 * Render the component
	 */
	render() {
		let tableHead;
		if (this.props.tableData.length > 0) {
			tableHead = <tr>
				{Object.keys(this.props.tableData[0]).map((key) => 
					<th>{key}</th>
				)}
			</tr>
		} else {
			tableHead = <tr><td>No data for this table</td></tr>
		}

		return(
			<div className="Table">
				<table>
					{tableHead}
					{this.props.tableData.map((row) => 
						<tr>
							<td>{row.name}</td>
							<td>{row.location}</td>
						</tr>
					)}
				</table>
			</div>
		)
	}
}

export default Table;
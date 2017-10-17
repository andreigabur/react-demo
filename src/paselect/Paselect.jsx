import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './Paselect.css'

class Paselect extends Component {

	/**
	 * Define component state
	 */
	state = {
		value: this.props.value
	}

	/**
	 * Custom functions
	 */
	selectValue = (newValue) => {
		this.setState({
			value: newValue
		})
	}

	/** 
	 * Render the component
	 */
	render() {
		return (
			<div className="Paselect">
				<Select
					name="Select"
					value={this.state.value}
					options={this.props.options}
					onChange={this.selectValue}
				/>
			</div>
		)
	}
}

export default Paselect;

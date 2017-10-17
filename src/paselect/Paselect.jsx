import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './Paselect.css'

class Paselect extends Component {

	constructor(props) {
		super(props);
		this.selectValue = this.selectValue.bind(this);
	}

	/**
	 * Define component state
	 */
	state = {
		value: this.props.value,
		options: (this.props.options) ? this.props.options : []
	}

	/**
	 * Custom functions
	 */
	selectValue(newValue) {
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
				<label>
					Default Select
				</label>
				<select
					className="default-select"
					name="Select"
					defaultValue={this.state.value}
				>
					{this.state.options.map((option, index) => {
						return (
							<option key={index} value={option.value}>{option.label}</option>
						)
					})}
				</select>
				<label>
					React Select
				</label>
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

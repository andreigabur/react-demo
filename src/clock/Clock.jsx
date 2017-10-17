import React, { Component } from 'react';

import './Clock.css';

class Clock extends Component {

	/** 
	 * Define component state
	 */
	state = {
		time: new Date().toLocaleTimeString(),
	}

	/**
	 * React component functions
	 */
	componentDidMount() {
		this.timer = setInterval( () => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	/**
	 * Custom functions
	 */
	tick = () => {
		this.setState({
			time: new Date().toLocaleTimeString(),
		})
	}

	/**
	 * Render the component
	 */
	render() {
		return (
			<div className="Clock">
				<p>
					Time is: <span>{new Date().toLocaleTimeString()}</span>
				</p>
			</div>
		);
	}
}

export default Clock;
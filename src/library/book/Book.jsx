import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

	constructor(...args) {
		super(...args);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.selectBook(this.props.book);
	}

	render() {
		return (
			<div className="book">
				<b>{this.props.book.title}</b> by <i>{this.props.book.author}</i> on {this.props.book.year} 
				<a className="is-pulled-right" onClick={this.handleClick}>
					<span className="icon ">
						<i className="fa fa-pencil"></i>
					</span>
				</a>
			</div>
		)
	}
}

export default Book;
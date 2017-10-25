import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

	constructor(...args) {
		super(...args);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.selectBook(this.props.book);
		this.props.setEdit(true);
	}

	render() {
		return (
			<div className="book">
				<b>{this.props.book.title}</b> by <i>{this.props.book.author}</i> on {this.props.book.year} 
				<a className="button is-small is-pulled-right" onClick={this.handleClick}>Edit</a>
			</div>
		)
	}
}

export default Book;
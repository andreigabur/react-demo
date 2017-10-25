import React, { Component } from 'react';
import Book from '../book/Book.jsx';
import './BookList.css';

class BookList extends Component {

	constructor(...args) {
		super(...args);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd() {
		this.props.setEdit(true);
		this.props.selectBook({});
	}

	render() {
		return (
			<div className="card book-list">
				<header className="card-header">
					<p className="card-header-title">
						Books
					</p>
				</header>
				<div className="card-content">
					<ul>
						{this.props.books.map((book, index) => 
							<li key={index}>
								<Book 
									book={book}
									selectBook={this.props.selectBook}
									setEdit={this.props.setEdit}
									/>
							</li>
						)}
					</ul>
				</div>
				<footer className="card-footer">
					<a className="card-footer-item" onClick={this.handleAdd}>Add a new book</a>
				</footer>
			</div>
		)
	}
}

export default BookList;
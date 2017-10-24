import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BookList.css';

class BookList extends Component {

	state = {}

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
						{this.props.books.map((book) => 
							<li><b>{book.title}</b> by <i>{book.author}</i> on {book.year}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
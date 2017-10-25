import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, deleteBook, editBook, selectBook, setEdit, setChart } from './library.actions.js';
import BookForm from './book-form/BookForm.jsx';
import BookList from './book-list/BookList.jsx';
import BookChart from './book-chart/BookChart.jsx';

import './Library.css';

class Library extends Component {

	constructor(...args) {
		super(...args);
		this.deleteBook = this.deleteBook.bind(this);
	}

	deleteBook(id) {
		this.props.deleteBook(id);
		this.props.setEdit(false);
	}

	getListClasses() {
		const classes = ['column', 'is-desktop'];
		if (this.props.edit || this.props.chart)
			classes.push('is-6')
		else 
			classes.push('is-12')
		
		return classes.join(' ');
	}

	render() {
		
		return(
			<div className="library">
				<div className="columns is-desktop head">
					{
						(this.props.chart) ?
						<a className="button is-info" onClick={() => this.props.setChart(false)}>Display chart</a>
						:
						<a className="button" onClick={() => this.props.setChart(true)}>Display chart</a>
					}
				</div>
				<div className="columns is-desktop">
					<div className={this.getListClasses()}>
						<BookList 
							books={this.props.books}
							selectBook={this.props.selectBook}
							setEdit={this.props.setEdit}
							/>
					</div>
					{ (this.props.edit === true) ?
						<div className="column is-desktop is-6">
							<BookForm 
								book={this.props.selectedBook}
								editBook={this.props.editBook} 
								addBook={this.props.addBook}
								setEdit={this.props.setEdit}
								deleteBook={this.deleteBook}
								/>
						</div>
						: (this.props.chart === true) ?
						<div className="column is-desktop is-6">
							<BookChart 
								books={this.props.books}
							/>
						</div>
						:
						''
					}
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		selectedBook: state.selectedBook,
		books: state.books,
		edit: state.edit,
		chart: state.chart,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book) => dispatch(addBook(book)),
		deleteBook: (id) => dispatch(deleteBook(id)),
		editBook: (book) => dispatch(editBook(book)),
		selectBook: (book) => dispatch(selectBook(book)),
		setEdit: (edit) => dispatch(setEdit(edit)),
		setChart: (chart) => dispatch(setChart(chart))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
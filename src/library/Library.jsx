import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, editBook, selectBook, setEdit } from './library.actions.js';
import BookForm from './book-form/BookForm.jsx';
import BookList from './book-list/BookList.jsx';

class Library extends Component {

	getListClasses() {
		const classes = ['column', 'is-desktop'];
		console.log(this.props.edit);
		if (this.props.edit)
			classes.push('is-6')
		else 
			classes.push('is-12')
		
		return classes.join(' ');
	}

	render() {
		
		return(
			<div className="columns is-desktop">
				<div className={this.getListClasses()}>
					<BookList 
						books={this.props.books}
						selectBook={this.props.selectBook}
						setEdit={this.props.setEdit}
						/>
				</div>
				{ (this.props.edit === true)
					?
					<div className="column is-desktop is-6">
						<BookForm 
							book={this.props.selectedBook}
							editBook={this.props.editBook} 
							addBook={this.props.addBook}
							setEdit={this.props.setEdit}
							/>
					</div>
					:
					''
				}
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		selectedBook: state.selectedBook,
		books: state.books,
		edit: state.edit
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		editBook: (book) => dispatch(editBook(book)),
		addBook: (book) => dispatch(addBook(book)),
		selectBook: (book) => dispatch(selectBook(book)),
		setEdit: (edit) => dispatch(setEdit(edit))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
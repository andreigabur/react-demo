import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import libraryReducer from './library.reducer.js';
import Book from './book/Book.jsx';
import BookList from './book-list/BookList.jsx';

const defaultState = {
	books: []
  };

  const store = createStore(libraryReducer, 
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Library extends Component {

	render() {
		return(
			<Provider store={store}>
				<div>
					<div className="column is-desktop is-6">
						<Book />
					</div>
					<div className="column is-desktop is-12">
						<BookList />
					</div>
				</div>
			</Provider>
		)
	}

}
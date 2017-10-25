import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import libraryRreducer from './library.reducer.js';
import Library from './Library.jsx';

const defaultState = {
		selectedBook : {},
		books: [
			{
				id: 1,
				title: 'Best book',
				author: 'Andrei',
				year: 2000
			},
			{
				id: 2,
				title: 'Let\'s do the react',
				author: 'Cip',
				year: 2010
			},
			{
				id: 3,
				title: 'Well... is Now',
				author: 'Marta',
				year: 2000
			},
			{
				id: 4,
				title: 'To Timisoara',
				author: 'Silvia',
				year: 2010
			},
			{
				id: 5,
				title: 'Felling for redux',
				author: 'Lidhvija',
				year: 1990
			}
		],
		edit: false,
		chart: false
	};

let store = createStore(libraryRreducer,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class LibraryContainer extends Component {
	render() {
		return (
			<Provider store={store}>
				<Library />
			</Provider>
		)
	}
};
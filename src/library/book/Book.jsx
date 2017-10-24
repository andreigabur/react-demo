import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../library.actions.js';
import './Book.css';

class Book extends Component {

	state = {
		title: '',
		author: '',
		year: ''
	}

	render() {
		return (
			<div className="card book">
				<header className="card-header">
					<p className="card-header-title">
						Book
					</p>
				</header>
				<div className="card-content">
					<div className="field">
						<label className="label">Title</label>
						<div className="control">
							<input className="input" type="text" ref={(input) => this.titleInput = input} placeholder="Book title" />
						</div>
					</div>
					<div className="field">
						<label className="label">Author</label>
						<div className="control">
							<input className="input" type="text" ref={(input) => this.authorInput = input}  placeholder="Author" />
						</div>
					</div>
					<div className="field">
						<label className="label">Year</label>
						<div className="control">
							<input className="input" type="text" ref={(input) => this.yearInput = input}  placeholder="YYYY" />
						</div>
					</div>
					<div className="control">
						<button className="button is-link"
							onClick={() => this.props.addBook({ title: this.titleInput.value, author: this.authorInput.value, year: this.yearInput.value })}
						>
							Submit
						</button>
					</div>
					{this.props.title}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		title: state.title
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book) => dispatch(addBook(book))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
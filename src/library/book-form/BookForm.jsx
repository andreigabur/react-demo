import React, { Component } from 'react';
import './BookForm.css';

class BookForm extends Component {

	constructor(...args) {
		super(...args);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		id: '',
		title: '',
		author: '',
		year: '',
		originalTitle: '',
	}

	componentWillMount() {
		this.setState({
			id: this.props.book.id || '',
			title: this.props.book.title || '',
			author: this.props.book.author || '',
			year: this.props.book.year || '',
			originalTitle: this.props.book.title || '',
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				id: nextProps.book.id || '',
				title: nextProps.book.title || '',
				author: nextProps.book.author || '',
				year: nextProps.book.year || '',
				originalTitle: nextProps.book.title || '',
			});
		}
	}

	handleInputChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.id === '') {
			this.props.addBook({ title: this.state.title, author: this.state.author, year: this.state.year })
		} else {
			this.props.editBook({ id: this.state.id, title: this.state.title, author: this.state.author, year: this.state.year })
		}
		this.props.setEdit(false)
	}

	renderButton() {
		if (this.state.id === '')
			return <input className="button is-link" type="submit" value="Add" />
		else
			return <input className="button is-link" type="submit" value="Edit" />
	}

	renderHead() {
		if (this.state.originalTitle === '')
			return <p className="card-header-title">Add Book</p>
		else 
			return <p className="card-header-title">Edit<span className="book-title">{this.state.originalTitle}</span></p>
	}

	render() {
		return (
			<div className="card book-form">
				<header className="card-header">
					{this.renderHead()}
					<a className="card-header-icon" aria-label="more options" onClick={() => this.props.setEdit(false)}>
						<span className="icon">
							<i class="material-icons">close</i>
						</span>
					</a>
				</header>
				<div className="card-content">
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<label className="label">Title</label>
							<div className="control">
								<input
									className="input"
									type="text"
									name="title"
									value={this.state.title}
									placeholder="Book title"
									onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="field">
							<label className="label">Author</label>
							<div className="control">
								<input
									className="input"
									type="text"
									name="author"
									value={this.state.author}
									placeholder="Author"
									onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="field">
							<label className="label">Year</label>
							<div className="control">
								<input
									className="input"
									type="text"
									name="year"
									value={this.state.year}
									placeholder="YYYY"
									onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="control">
							{this.renderButton()}
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default BookForm;
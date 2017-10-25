let nextId = 3;

export const addBook = (book) => {
	return {
		type: 'ADD_BOOK',
		id: ++nextId,
		title: book.title,
		author: book.author,
		year: book.year
	}
}

export const editBook = (book) => {
	return {
		type: 'EDIT_BOOK',
		id: book.id,
		title: book.title,
		author: book.author,
		year: book.year
	}
}

export const selectBook = (book) => {
	return {
		type: 'SELECT_BOOK',
		book: book
	}
}

export const setEdit = (edit) => {
	return {
		type: 'SET_EDIT',
		edit: edit
	}
}

export const deleteBook = (id) => {
	return {
		type: 'DELETE_BOOK',
		id: id
	}
}
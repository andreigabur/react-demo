export const addBook = (book) => {
	return {
		type: 'ADD_BOOK',
		title: book.title,
		author: book.author,
		year: book.year
	}
}
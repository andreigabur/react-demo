const libraryReducer = ((state = [], action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				books: [
					...state.books,
					{
						id: action.id,
						title: action.title,
						author: action.author,
						year: action.year
					}
				]
			}
		case 'DELETE_BOOK':
			return {
				...state,
				books: state.books.filter((book) => {
					return (book.id !== action.id) 
				}),
			}
		case 'EDIT_BOOK':
			return {
				...state,
				books: state.books.map((book) => {
					if (book.id !== action.id) 
						return book;
					
					return {
						id: action.id,
						title: action.title,
						author: action.author,
						year: action.year
					}
				}),
				selectedBook: {
				}
			}
		case 'SELECT_BOOK':
			return {
				...state,
				selectedBook: action.book
			}
		case 'SET_EDIT':
			return {
				...state,
				edit: action.edit
			}
		default:
			return state
	}
})

export default libraryReducer;
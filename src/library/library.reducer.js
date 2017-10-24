const library = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				books: [
					...state.books,
					{
						title: action.title,
						author: action.author,
						year: action.year
					}
				]
			}
		default:
			return state
	}
}

export default library;
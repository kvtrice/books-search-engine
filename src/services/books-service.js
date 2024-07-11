export const fetchBooks = async (searchQuery, numResults) => {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${numResults}`
	);

	if (!response.ok) {
		throw new Error("Unable to retrieve books, please try again later.");
	}

	const data = await response.json();

	if (data.items.length === 0) {
		throw new Error("No books found, please try another search term.");
	}

	const cleanedData = data.items.map(book => {
		const newBook = {
			id: book.id,
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors,
			publisher: book.volumeInfo.publisher,
			publishedDate: book.volumeInfo.publishedDate,
			longDescription: book.volumeInfo.description,
			pageCount: book.volumeInfo.pageCount,
			genres: book.volumeInfo.categories,
			shortDescription: book.searchInfo?.textSnippet,
			image: book.volumeInfo.imageLinks?.thumbnail,
		};

		return newBook;
	});

	return cleanedData;
};

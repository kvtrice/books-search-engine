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

	const cleanUpHTMLDescriptions = text => {
		const doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};

	const cleanedData = data.items.map(book => {
		const newBook = {
			id: book.id,
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors || "Unknown author",
			publisher: book.volumeInfo.publisher,
			publishedDate: book.volumeInfo.publishedDate,
			longDescription: book.volumeInfo.description,
			pageCount: book.volumeInfo.pageCount,
			genres: book.volumeInfo.categories,
			shortDescription: cleanUpHTMLDescriptions(
				book.searchInfo?.textSnippet
			),
			image:
				book.volumeInfo.imageLinks?.thumbnail ||
				"https://scholastic.asia/sites/all/themes/scholastic_asia/images/default-book.png",
		};

		return newBook;
	});

	return cleanedData;
};

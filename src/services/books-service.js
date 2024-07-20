export const fetchBooks = async (searchQuery, page = 1, numResults = 10) => {
	// Calculate the startIndex dynamically based on the page number & numResults
	const startIndex = (page - 1) * numResults;

	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${numResults}&startIndex=${startIndex}`
	);

	if (!response.ok) {
		throw new Error("Unable to retrieve books, please try again later.");
	}

	const data = await response.json();

	if (data.totalItems === 0) {
		throw new Error("No books found, please try another search term.");
	}

	// Get total pages from the returned totalItems and numResults
	const totalPages = Math.ceil(data.totalItems / numResults);

	// Function to format the short descriptions (which are in HTML)
	const cleanUpHTMLDescriptions = text => {
		const doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};

	// Create a new object in a clear structure
	const cleanedData = data.items.map(book => {
		const newBook = {
			id: book.id,
			title: book.volumeInfo.title || "No title available",
			authors: book.volumeInfo.authors || "Unknown author",
			publisher: book.volumeInfo.publisher || "Unknown publisher",
			publishedDate:
				book.volumeInfo.publishedDate || "Unknown published date",
			pageCount: book.volumeInfo.pageCount || "Unknown number of",
			genres: book.volumeInfo.categories || "No categories available",
			shortDescription: book.searchInfo?.textSnippet
				? cleanUpHTMLDescriptions(book.searchInfo?.textSnippet)
				: "No description available",
			image:
				book.volumeInfo.imageLinks?.thumbnail ||
				"https://scholastic.asia/sites/all/themes/scholastic_asia/images/default-book.png",
		};

		return newBook;
	});

	return { books: cleanedData, totalPages };
};

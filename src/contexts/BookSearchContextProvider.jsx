import { createContext, useEffect, useState } from "react";
import { fetchBooks } from "../services/books-service";

export const BookSearchContext = createContext();

const BookSearchContextProvider = ({ children }) => {
	const [books, setBooks] = useState(null);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [fetchStatus, setFetchStatus] = useState("IDLE");
	const [searchQuery, setSearchQuery] = useState(null);
	const [numResults, setNumResults] = useState(null);
	const [error, setError] = useState(null);

	const handleSearch = async (searchQuery, page, numResults) => {
		setFetchStatus("LOADING");
		setError(null);
		try {
			const data = await fetchBooks(searchQuery, page, numResults);
			setBooks(data.books);
			setTotalPages(data.totalPages);
			setFetchStatus("SUCCESS");
		} catch (error) {
			setBooks([]);
			setTotalPages(0);
			setFetchStatus("ERROR");
			setError(error.message);
		}
	};

	useEffect(() => {
		if (searchQuery) {
			handleSearch(searchQuery, page, numResults);
		}
	}, [searchQuery, page, numResults]);

	return (
		<BookSearchContext.Provider
			value={{
				books,
				setBooks,
				page,
				setPage,
				totalPages,
				setTotalPages,
				fetchStatus,
				setFetchStatus,
				setSearchQuery,
				setNumResults,
				handleSearch,
				error,
				setError,
			}}
		>
			{children}
		</BookSearchContext.Provider>
	);
};

export default BookSearchContextProvider;

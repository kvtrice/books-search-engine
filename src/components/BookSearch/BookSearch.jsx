import { useContext, useRef, useState } from "react";
import styles from "./BookSearch.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import { fetchBooks } from "../../services/books-service";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";

const BookSearch = () => {
	const { setFetchStatus } = useContext(FetchStatusContext);
	const { setBooks } = useContext(BookSearchContext);
	const searchInputRef = useRef(null);
	const numResultsRef = useRef(null);

	const handleSearch = async e => {
		e.preventDefault();
		setFetchStatus("LOADING");
		const searchQuery = searchInputRef.current.value;
		const numResults = numResultsRef.current.value;
		if (!searchQuery) {
			setBooks([]);
			setFetchStatus("ERROR");
		}

		try {
			const retrievedBooks = await fetchBooks(searchQuery, numResults);
			setBooks(retrievedBooks);
			setFetchStatus("SUCCESS");
		} catch (error) {
			setBooks([]);
			setFetchStatus("ERROR");
		}

		searchInputRef.current.value = "";
	};

	return (
		<>
			<form>
				<input
					type="text"
					name="search"
					id="search"
					ref={searchInputRef}
					required
				/>
				<select
					name="numResults"
					id="numResults"
					ref={numResultsRef}
				>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={40}>40</option>
				</select>
				<button onClick={handleSearch}>Search</button>
			</form>
		</>
	);
};

export default BookSearch;

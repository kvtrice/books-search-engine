import { useContext, useRef, useState } from "react";
import styles from "./BookSearch.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import { fetchBooks } from "../../services/books-service";

const BookSearch = () => {
	const searchInputRef = useRef(null);
	const { books, setBooks } = useContext(BookSearchContext);

	const handleSearch = async e => {
		e.preventDefault();
		const searchQuery = searchInputRef.current.value;
		const retrievedBooks = await fetchBooks(searchQuery, 10);
		setBooks(retrievedBooks);
		searchInputRef.current.value = "";
	};

	console.log(books);

	return (
		<form>
			<input
				type="text"
				name="search"
				id="search"
				ref={searchInputRef}
			/>
			<button onClick={handleSearch}>Search</button>
		</form>
	);
};
export default BookSearch;

import { useContext, useRef, useState } from "react";
import styles from "./BookSearch.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import { fetchBooks } from "../../services/books-service";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";
import { ErrorContext } from "../../contexts/ErrorContextProvider";

const BookSearch = () => {
	const { setFetchStatus } = useContext(FetchStatusContext);
	const { setBooks } = useContext(BookSearchContext);
	const { setError } = useContext(ErrorContext);
	const searchInputRef = useRef(null);
	const numResultsRef = useRef(null);

	const handleSearch = async e => {
		e.preventDefault();
		setFetchStatus("LOADING");
		const searchQuery = searchInputRef.current.value;
		const numResults = numResultsRef.current.value;

		if (!searchQuery || searchQuery.trim() === "") {
			setBooks([]);
			setFetchStatus("ERROR");
			setError("Please enter a valid search term");
		} else {
			try {
				const retrievedBooks = await fetchBooks(
					searchQuery,
					numResults
				);
				setBooks(retrievedBooks);
				setFetchStatus("SUCCESS");
			} catch (error) {
				setBooks([]);
				setFetchStatus("ERROR");
				setError(error.message);
			}

			searchInputRef.current.value = "";
		}
	};

	return (
		<>
			<form className={styles.form}>
				<div className={styles.form__inputDiv}>
					<input
						className={styles.form__searchInput}
						type="text"
						name="search"
						id="search"
						ref={searchInputRef}
						placeholder="Enter a Book Title, Author, Publisher..."
						required={true}
					/>
					<div className={styles.form__buttonDiv}>
						<button
							onClick={handleSearch}
							className={styles.form__button}
						>
							Search
						</button>
					</div>
				</div>
				<select
					className={styles.form__numResults}
					name="numResults"
					id="numResults"
					ref={numResultsRef}
				>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={40}>40</option>
				</select>
			</form>
		</>
	);
};

export default BookSearch;

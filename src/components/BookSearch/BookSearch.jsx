import { useContext } from "react";
import styles from "./BookSearch.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";

const BookSearch = () => {
	const {
		setBooks,
		setFetchStatus,
		handleSearch,
		setSearchQuery,
		setNumResults,
		setError,
		setPage,
	} = useContext(BookSearchContext);

	const handleSubmit = async e => {
		e.preventDefault();
		setFetchStatus("LOADING");
		const form = e.target;
		const searchForm = new FormData(form);
		const searchQuery = searchForm.get("search").trim();
		const numResults = searchForm.get("numResults");

		if (!searchQuery) {
			setBooks([]);
			setPage(1);
			setSearchQuery(searchQuery);
			setNumResults(0);
			setFetchStatus("ERROR");
			setError("Please enter a valid search term");
			return;
		}

		setSearchQuery(searchQuery);
		setNumResults(numResults);
		setPage(1);

		await handleSearch(searchQuery, 1, numResults);
		form.reset();
	};

	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<div className={styles.form__inputDiv}>
					<input
						className={styles.form__searchInput}
						type="text"
						name="search"
						id="search"
						placeholder="Enter a Book Title, Author, Publisher..."
						required={true}
					/>
					<div className={styles.form__buttonDiv}>
						<button
							type="submit"
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

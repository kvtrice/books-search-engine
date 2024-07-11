import { useContext } from "react";
import styles from "./BooksContainer.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import BookCard from "../../components/BookCard/BookCard";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";

const BooksContainer = () => {
	const { books } = useContext(BookSearchContext);
	const { fetchStatus } = useContext(FetchStatusContext);

	return (
		<div>
			{fetchStatus === "ERROR" && <p>No books found, please try another search term</p>}
			{fetchStatus === "LOADING" && <p>...loading</p>}
			{fetchStatus === "SUCCESS" &&
				books?.map(book => (
					<BookCard
						key={book.id}
						book={book}
					/>
				))}
		</div>
	);
};

export default BooksContainer;

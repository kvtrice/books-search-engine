import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import styles from "./Pagination.module.scss";
import { useContext } from "react";

const Pagination = ({ currentPage, lastPage }) => {
	const { setPage, error } = useContext(BookSearchContext);

	return (
		<nav
			aria-label="Page navigation"
			className={styles.pagination}
		>
			<button
				className={styles.pagination__button}
				disabled={currentPage === 1}
				onClick={() => setPage(currentPage - 1)}
			>
				&larr; Prev
			</button>
			<p className={styles.pagination__text}>{currentPage}</p>
			<button
				className={styles.pagination__button}
				disabled={currentPage === lastPage || error}
				onClick={() => setPage(currentPage + 1)}
			>
				Next &rarr;
			</button>
		</nav>
	);
};

export default Pagination;

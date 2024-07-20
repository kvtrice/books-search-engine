import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import styles from "./Pagination.module.scss";
import { useContext } from "react";

const Pagination = ({ currentPage, lastPage }) => {
	const { setPage } = useContext(BookSearchContext);

	return (
		<nav aria-label="Page navigation">
			<button
				disabled={currentPage === 1}
				onClick={() => setPage(currentPage - 1)}
			>
				Prev
			</button>
			<span>{currentPage}</span>
			<button
				disabled={currentPage === lastPage}
				onClick={() => setPage(currentPage + 1)}
			>
				Next
			</button>
		</nav>
	);
};

export default Pagination;
